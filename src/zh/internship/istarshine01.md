---
title: 体育传媒大模型 工作流程
icon: python
date: 2025-1-22 14:52:39
author: XiaoXianYue
isOriginal: true
category: 
    - 智慧星光实习笔记
tag:
    - 智慧星光实习笔记
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

## 1. 项目任务分解

<img src="./istarshine01.assets/体育传媒.png" alt="体育传媒" style="zoom: 200%;" />

## 2. 工作内容

视频流：

- 目标识别，事件识别（精彩事件），动作识别 的数据标注 

    <img src="./istarshine01.assets/image-20250122161018551.png" alt="image-20250122161018551" style="zoom:25%;" />

- 视频流模型训练 demo（进行了简单的目标识别）

    <img src="./istarshine01.assets/image-20250122160815986.png" alt="image-20250122160815986" style="zoom: 25%;" />

智能体的构建：

- 对于项目[视频流]使用的 clip yolo 开源大模型进行微调。

- 智能体知识库 -> 体育基础知识库[tools] 的构建

    <img src="./istarshine01.assets/image-20250122161303835.png" alt="image-20250122161303835" style="zoom:33%;" />

- 智能体 demo [基于基础的知识库的简单问答]

<img src="./istarshine01.assets/9a3bbce8994ec5b7f52eebde0d9d4ab.png" alt="9a3bbce8994ec5b7f52eebde0d9d4ab" style="zoom: 25%;" />



## 3. 新闻舆情抓取智能体

### 代码

```python
import http.client
import json
import string
import time
import pandas as pd
import openpyxl
import time
import os
import requests
from datetime import datetime, timedelta
from openai import OpenAI
from summa import summarizer
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lex_rank import LexRankSummarizer
import jieba
from sumy.summarizers.lsa import LsaSummarizer
from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Pt, Inches, RGBColor
from docx.oxml.ns import qn

# 中央和地方重点新闻网站
# 主要商业网站
# 自媒体平台
# 知识分享网站朋友圈群组
wecom_key = 'xxxx'
moblie_list = ['13112341234']

def main():
    news_item_limit_list = [6, 6, 4, 3]
    docx_file_path = gen_docx_file_path()
    start_time = gen_now_datetime()
    print(start_time + " : 《" + docx_file_path + "》 start.")
    if os.path.exists(docx_file_path):
        print(f"报告文件《{docx_file_path}》文件存在")
        return

    all_hot_news_list = []

    for i in range(4):
        data_list = []
        llm_data_list = []
        hot_llm_data_list = []
        new_item_limit = news_item_limit_list[i]

        for page in range(10):
            try:
                data_page_list = []
                ret_list = extract_news(i, page=page, pageSize=10)
                for ret_data in ret_list:
                    summary_txt = gen_summary(ret_data['content'])
                    # print(summary_txt)
                    # print("-------------------------")
                    # print(ret_data['content'])
                    # print("=========================")

                    data = {
                        "title": ret_data['title'],
                        # "content": ""
                    }
                    data_list.append(data)
                    data_page_list.append(data)

                # data_page_json = json.dumps(data_page_list)
                if len(data_page_list) == 0:
                    continue

                data_page_str = "\n".join([str(item) for item in data_page_list])
                llm_ret_json = chat_doubao(msg=data_page_str)
                llm_ret_json = llm_ret_json.replace("'", '"')
                # print(data_page_json)
                # print(type(llm_ret_json))
                print('data_page_list=', data_page_list)
                print('llm_ret_json=', llm_ret_json)
                llm_ret = json.loads(llm_ret_json)
                llm_data_list.extend(llm_ret)
            except Exception as e:
                print("====== exception-estr=", str(e))
                continue

            for llm_data in llm_data_list:
                hot_llm_data_list = list(dict.fromkeys(hot_llm_data_list))
                if ('is_related_to_ethnic' in llm_data) and (llm_data['is_related_to_ethnic'] == '是') and (
                        len(hot_llm_data_list) <= new_item_limit):
                    hot_llm_data_list.append(llm_data['title'])
                    print('hot_llm_data_list_len=', len(hot_llm_data_list))

            if len(hot_llm_data_list) >= new_item_limit:
                break

        print(data_list)
        print(llm_data_list)
        print("-----------------------i=", i)
        print("hot_llm_data_list=", hot_llm_data_list)

        all_hot_news_list.append("; ".join(hot_llm_data_list))

        # 获取当前日期
        current_date = str(datetime.now().date())
        file_name = current_date + '_' + str(i)
        write_excel(file_name, data_list)

        file_llm_name = "llm_" + current_date + "_" + str(i)
        write_excel(file_llm_name, llm_data_list)

    print("=====================")
    print("all_hot_news_list=", all_hot_news_list)

    docx_file_path = gen_docx(all_hot_news_list)

    send_wecom(docx_file_path)

    end_time = gen_now_datetime()
    print(end_time + " : 《" + docx_file_path + "》 end.")
    return all_hot_news_list

def gen_now_datetime():
    now = datetime.now()

    # 格式化为 "年-月-日 时:分:秒" 的形式
    current_time = now.strftime("%Y年%m月%d日 %H时%M分%S秒")
    return current_time


def send_wecom(docx_file_path):
    media_id = upload_weccom(docx_file_path)
    url = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=' + wecom_key
    headers = {
        'Content-Type': 'application/json'
    }
    payload = {
        "msgtype": "file",
        "file": {
            "media_id": media_id  # 上一步中获取的 media_id
        }
    }
    response = requests.post(url, data=json.dumps(payload), headers=headers)
    print('发送文件。ret=', response.json())

    payload_text = {
        "msgtype": "text",
        "text": {
            "content": "",
            # "mentioned_list":[""]
            "mentioned_mobile_list": moblie_list
        }
    }

    response = requests.post(url, data=json.dumps(payload_text), headers=headers)
    print('发送消息。ret=', response.json())


def upload_weccom(docx_file_path):
    url = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/upload_media?key=' + wecom_key + '&type=file'
    files = {'file': open(docx_file_path, 'rb')}
    response = requests.post(url, files=files)

    # 获取返回结果
    resp = response.json()
    print('企微上传文件：ret=', resp)

    return resp['media_id']


def gen_docx(all_hot_news_list):
    current_date = datetime.now()
    formatted_date = current_date.strftime("%Y年%m月%d日")

    new_date = current_date + timedelta(days=1)
    formatted_new_date = new_date.strftime("%Y年%m月%d日")

    doc = Document()

    # 向文档添加标题
    title = doc.add_heading(level=1)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER  # 标题居中对齐
    title_run = title.add_run('24小时涉民族因素网上舆情态势综述简报')
    set_font(title_run, '黑体', Pt(22))  # 三号字对应的磅值约为16pt
    title_run.font.color.rgb = RGBColor(0, 0, 0)  # 确保字体颜色为黑色
    doc.add_paragraph()

    # 第一段
    p_doc = doc.add_paragraph()
    p_doc.paragraph_format.first_line_indent = Pt(24)
    p_run = p_doc.add_run(
        formatted_date + ' 09：00至' + formatted_new_date + '09：00，网上各族人民共叙中国多民族文化融合传播，共筑共有精神家园舆论氛围浓厚，全网涉民族因素网络舆情平稳，主流舆论强劲。')
    set_font(p_run, '宋体', Pt(16))
    p_run.font.size = Pt(16)

    # 第二段
    p_doc2 = doc.add_paragraph()
    p_doc2.paragraph_format.first_line_indent = Pt(24)
    p_run2 = p_doc2.add_run('一是中央和地方重点新闻网站等主流媒体积极宣介民族地区各项工作呈现良好面貌。')
    set_font(p_run2, '宋体', Pt(16))
    p_run2.bold = True
    p_run2.font.size = Pt(16)

    news_0 = all_hot_news_list[0]
    if len(news_0) > 0:
        news_0 = '主要包括' + news_0
    else:
        news_0 = '本日无相关新闻。'
    p_run21 = p_doc2.add_run(news_0)
    set_font(p_run21, '宋体', Pt(16))
    p_run21.font.size = Pt(16)

    # 第三段
    p_doc3 = doc.add_paragraph()
    p_doc3.paragraph_format.first_line_indent = Pt(24)
    p_run3 = p_doc3.add_run('二是主要商业网站持续关注民族地区涉医药、基建和民生热点话题。')
    set_font(p_run3, '宋体', Pt(16))
    p_run3.bold = True
    p_run3.font.size = Pt(16)

    news_1 = all_hot_news_list[1]
    if len(news_1) > 0:
        news_1 = '主要包括' + news_1
    else:
        news_1 = '本日无相关新闻。'
    p_run31 = p_doc3.add_run(news_1)
    set_font(p_run31, '宋体', Pt(16))
    p_run31.font.size = Pt(16)

    # 第四段
    p_doc3 = doc.add_paragraph()
    p_doc3.paragraph_format.first_line_indent = Pt(24)
    p_run3 = p_doc3.add_run('三是微博、短视频等社交平台网民关注涉民族因素舆情热点多，有一定热议。')
    set_font(p_run3, '宋体', Pt(16))
    # p_run3.bold = True
    p_run3.font.size = Pt(16)

    news_2 = all_hot_news_list[2]
    if len(news_2) > 0:
        news_2 = '主要涉及' + news_2
    else:
        news_2 = '本日无相关新闻。'
    p_run31 = p_doc3.add_run(news_2)
    set_font(p_run31, '宋体', Pt(16))
    p_run31.font.size = Pt(16)

    # 第五段
    p_doc3 = doc.add_paragraph()
    p_doc3.paragraph_format.first_line_indent = Pt(24)
    p_run3 = p_doc3.add_run('四是知识分享网站及科研院所等专业网站民族领域学术问题有一定讨论热度。')
    set_font(p_run3, '宋体', Pt(16))
    # p_run3.bold = True
    p_run3.font.size = Pt(16)

    news_3 = all_hot_news_list[3]
    if len(news_3) > 0:
        news_3 = '主要涉及' + news_3
    else:
        news_3 = '本日无相关新闻。'
    p_run31 = p_doc3.add_run(news_3)
    set_font(p_run31, '宋体', Pt(16))
    p_run31.font.size = Pt(16)

    # 第六段
    doc.add_paragraph()
    p_doc3 = doc.add_paragraph()
    p_doc3.paragraph_format.first_line_indent = Pt(24)
    p_run3 = p_doc3.add_run('以上情况供领导参阅，重要情况已通过《每日舆情》报送。')
    set_font(p_run3, '宋体', Pt(16))
    # p_run3.bold = True
    p_run3.font.size = Pt(16)

    # 第七段
    p_doc7 = doc.add_paragraph()
    p_doc7.paragraph_format.right_indent = Pt(48)
    p_run7 = p_doc7.add_run('舆情中心')
    set_font(p_run7, '宋体', Pt(16))
    p_run3.bold = True
    p_run7.font.size = Pt(16)
    p_doc7.alignment = 2

    p_doc8 = doc.add_paragraph()
    # p_doc8.paragraph_format.right_indent = Pt(24)
    p_run8 = p_doc8.add_run(formatted_new_date)
    set_font(p_run8, '宋体', Pt(16))
    # p_run3.bold = True
    p_run8.font.size = Pt(16)
    p_doc8.alignment = 2

    # 保存文档到指定路径
    docx_file_path = gen_docx_file_path()
    doc.save(docx_file_path)
    return docx_file_path

def gen_docx_file_path():
    current_date = datetime.now()
    new_date = current_date + timedelta(days=1)
    formatted_new_date = new_date.strftime("%Y年%m月%d日")
    docx_file_path = formatted_new_date + '舆情话题点.docx'
    return 'report/' + docx_file_path

def set_font(run, font_name, font_size):
    run.font.name = font_name
    run.font.name = font_name
    run._element.rPr.rFonts.set(qn('w:eastAsia'), font_name)
    run.element.rPr.rFonts.set(qn('w:eastAsia'), font_name)
    run.font.size = font_size

def gen_summary(txt):
    summary1 = summarizer.summarize(txt, ratio=0.2)

    parser = PlaintextParser.from_string(txt, Tokenizer("chinese"))
    lex_rank_summarizer = LexRankSummarizer()
    lex_rank_summarizer.threshold = 0.3
    summary = lex_rank_summarizer(parser.document, 6)  # 生成5个句子的摘要
    summary_list = []
    for sent in summary:
        summary_list.append(str(sent))

    summary2 = "\n".join(summary_list)

    return summary1 + "\n" + summary2

def chat_doubao(msg: string):
    api_key = "xxxx"  # doubao-pro-32k-240828
    model = "xxxxx"
    client = OpenAI(
        # 替换为您需要调用的模型服务Base Url
        base_url="https://ark.cn-beijing.volces.com/api/v3/",
        # 环境变量中配置您的API Key
        api_key=api_key
    )
    # (输出新闻标题未超80字符，则保留原新闻标题；超过80个字符，请根据新闻标题生成不超过80字符的新标题)
    print("----- standard request -----")

    system = """
你是一个新闻标题筛选助手, 你的任务是从提供的新闻列表中筛选出与民族有关的新闻标题。在筛选时，请按照以下标准和步骤进行操作：
筛选标准：
1.新闻内容涉及民族文化、民族习俗、民族传统、民族关系、民族语言、民族冲突、民族政策、民族团结、民族发展等方面内容。
2.关注新闻中提到的特定民族名称，如‘藏族’，‘维吾尔族’，‘回族’，‘苗族’，‘蒙古族’等。
3.关注新闻中提到的特定地域，如‘西藏’，‘新疆’，‘宁夏’，‘广信’，‘内蒙古’等。
4.中华民族共同体意识、民族融合、民族交往交流交融。涉及汉族与少数民族在产业发展、教育、医疗、文化等多方面的交流互动与协作。
5.判断新闻是否讨论与民族相关的事件、人物或社会现象。
操作步骤：
1.仔细查看新闻列表中的每个新闻标题。
2.对于符合上述筛选标准的标题，原样记录下来。
3.对于记录下来的新闻标题, 如果新闻核心信息重复或非常相似(例如:语义一致,新闻的基本信息、事件、人物、时间、地点等方面高度一致, 相同主题,大部分重叠等)，则认为这两条新闻是重复或相似。
4.当发现重复或相似新闻时，确保只原样记录第一条。
5.在记录完所有符合要求的标题后，检查返回的标题是否逐字与输入标题一致，包括字符、标点和空格。如果发现任何不一致，请纠正并再次输出正确的标题。

最后，请在[]标签内输出你的筛选结果,确保为json格式(参考格式：[{'title':'标题','is_related_to_ethnic':'是','related_ethnic_name_or_theme':'命中民族筛选标准主题（如果适用）'}])。
    """

    system = """
#背景：
以下是新闻列表：
{'title': '“真正成为世界上最强大的一个政党”——写在二十届中央纪委四次全会召开之际'}
{'title': '“真正成为世界上最强大的一个政党”'}
{'title': '重大突破！青藏高原新发现铜矿资源量2000余万吨'}
{'title': '海关总署出台十五项措施 进一步推动西部大开发形成新格局'}
{'title': '西藏拉萨市墨竹工卡县发生3.2级地震'}
{'title': '新疆阿克苏地区拜城县发生4.1级地震'}
{'title': '西藏拉萨墨竹工卡县发生3.2级地震 震源深度10千米'}
{'title': '同心之花绽放天山南北'}
{'title': '【#央视曝光加油站偷油逃税猫腻#，短斤少两 #多地消费者遭遇加油站作弊#】记者了解到，十年前，加油站常见的作弊手法主要是油枪空转，工作人员通过在油枪开关处做手脚，空转加油枪，使燃油还没有加入油箱，就已经产生费用。还有一种常见的作弊方式就是对加油机上计油器和主板的参数进行调整。这一手段至今仍然在沿用，前不久在广西贺州市的一家加油站，执法人员就发现了这个作弊手段。执法人员在加油机键盘页面设置'}
{'title': '航拍广西梧州港繁忙作业：货车来往穿梭 货船有序航行'}
{'title': '#中华民族最伟大和无私的人是谁#毛主席'}
{'title': '#中华民族最伟大和无私的人是谁#毛泽东'}
{'title': '#中华民族最伟大和无私的人是谁#是全心全意为人民服务的伟大领袖毛主席'}

# 角色
你是一个新闻标题筛选助手，你将根据客户提供的新闻标题筛选出与民族有关的标题需求，根据以下规则一步步执行任务。

# 任务描述与要求
1. 按照设定的筛选标准来判断新闻标题是否与民族有关，筛选标准包括新闻内容涉及民族文化、习俗、传统、关系、语言、冲突、政策、团结、发展等，提到特定民族名称或特定地域，涉及中华民族共同体意识、民族融合、民族交往交流交融，以及判断是否讨论与民族相关的事件、人物或社会现象。
2. 仔细查看新闻列表中的每个标题。
3. 对符合标准的标题原样记录且确保相同意思标题不重复记录。
4. 记录完后检查返回标题与输入标题是否逐字一致（包括字符、标点和空格），不一致则纠正后再次输出。
5. 最终以json格式在[]标签内输出筛选结果，格式为[{'title':'标题','is_related_to_ethnic':'是','related_ethnic_name_or_theme':'命中民族筛选标准主题（如果适用）'}]。

# 参考示例
示例1:
用户: [{"title": "藏族传统节日盛大举行"},{"title": "无关新闻标题"}]
输出: [{"title": "藏族传统节日盛大举行","is_related_to_ethnic": "是","related_ethnic_name_or_theme": "藏族传统节日"}]
示例2:
用户: [{"title": "新疆的发展新机遇"},{"title": "不涉及民族的新闻"}]
输出: [{"title": "新疆的发展新机遇","is_related_to_ethnic": "是","related_ethnic_name_or_theme": "新疆发展"}]

# 相关限制
1. 相同内容仅返回一条，不重复返回内容。
    """
    msg = "以下是新闻列表：\n" + msg
    msg = "中华民族最伟大和无私的人是谁"
    completion = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": msg},
        ],
    )

    print("msg=", msg)
    print('llm_resp||completion=', completion)

    return completion.choices[0].message.content

def write_excel(file_path, data_list):
    df = pd.DataFrame(data_list)

    file_path = "news/news_list_" + file_path + ".xlsx"
    # 将 DataFrame 写入 Excel
    df.to_excel(file_path, index=False)

def extract_news(k, page=0, pageSize=100):
    time.sleep(1)
    conf = extract_conf(k)

    conf['limitNum'] = pageSize
    conf['pageSize'] = pageSize
    conf['offset'] = page * pageSize

    timestamp_in_seconds = time.time()
    timestamp_in_milliseconds = int(timestamp_in_seconds * 1000)
    conf['timestamp'] = timestamp_in_milliseconds

    conn = http.client.HTTPSConnection("dowding-gwa.istarshine.com")
    payload = json.dumps(conf)
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8va3VhaXNlYXJjaC1kb3dkaW5nLmlzdGFyc2hpbmUubmV0LmNuL2FwaSIsImlhdCI6MTczNTE5ODIzOSwibmJmIjoxNzM1MTk4MjM5LCJleHAiOjI2ODEyNzgyMzksImRkX2FpZCI6OTAyMzIxNSwiZGRfY2lkIjoxLCJkZF9sb2UiOiIxNTEyMDAyNjYyMyIsImtzX2FpZCI6OTAyNDY4NiwiZG93ZGluZ19kZXZpY2UiOiJhcGkiLCJsb2dpbl9pZCI6ImxvZ2luX2lkX3pzTUdqZyIsImp1bXBfYWNjb3VudF9pZCI6MCwia2V5IjoiZG93ZGluZ19wcm9kX2FpZF85MDIzMjE1In0.zc4UKWyS0bxZgoSs5wOHRGwj8a-BLPr-AxgsSVp8QAU',
        'Cookie': 'aliyungf_tc=b74406c2afa53cda09f1134798a07bd693031fcbebafc084fb23bedfccd09171'
    }
    conn.request("POST", "/yqms/v4/api/subject/infos", payload, headers)
    res = conn.getresponse()
    dataJson = res.read().decode("utf-8")
    ret = json.loads(dataJson)

    if ret["code"] != 200:
        msg = ""
        if "message" in ret:
            msg = ret["message"]
        else:
            msg = ret["msg"]

        print(f"conf=" + str(k) + "||page=" + str(page) + "||pageSize=" + str(pageSize) + "||errmsg=" + str(
            ret['code']) + "-" + msg)
        return []

    return ret['data']['records']

def extract_conf(k):
    conf_list = [
        {
            "id": "9ed1653d4d1a4c3f892d25ab730630b8",
            "subjectType": 1,
            "timeRange": "2",
            "timeType": "1",
            "infoSource": "",
            "attitude": [
                "2"
            ],
            "sourceRange": "",
            "mediaType": [],
            "shortVideoType": [],
            "tvChannel": [],
            "tvColumn": [],
            "isOcr": "",
            "filterType": "1",
            "matchRange": "",
            "firstRegion": "100",
            "wordRange": "50",
            "uniqueRegion": True,
            "weiboTimeFilter": False,
            "ignoreWeiboLocationWord": False,
            "ignoreWeiboRemindWord": False,
            "ignoreWeiboTopicWord": False,
            "weiboType": [],
            "weiboAttestType": [],
            "weiboState": "",
            "isRepeat": "0",
            "browseRange": "",
            "isImportance": False,
            "noPicture": False,
            "orderBy": 1,
            "isHideSummary": False,
            "customCondition": [],
            "subjectModule": 1,
            "refreshType": 2,
            "pageSize": 30,
            "sites": [],
            "industryTags": [],
            "distinguishType": [],
            "videoDurationType": [],
            "regionalMatchType": [],
            "regionalMatch": [],
            "subjectArray": [],
            "sqSourceRange": [],
            "fansCountRange": "",
            "isSuspectedAi": "",
            "mcnType": "",
            "isFullscreen": False,
            "warningType": 1,
            "monitorType": 0,
            "language": 2,
            "offset": 0,
            "limitNum": 30,
            "timestamp": 1736156912280,
            "activeNav": 1,
            "backTrack": False
        },
        {
            "id": "50006c28198f4c6bb84fa05dfce2eb42",
            "subjectType": 1,
            "timeRange": "2",
            "timeType": "1",
            "infoSource": "",
            "attitude": [
                "2"
            ],
            "sourceRange": "",
            "mediaType": [],
            "shortVideoType": [],
            "tvChannel": [],
            "tvColumn": [],
            "isOcr": "",
            "filterType": "1",
            "matchRange": "",
            "firstRegion": "100",
            "wordRange": "50",
            "uniqueRegion": True,
            "weiboTimeFilter": False,
            "ignoreWeiboLocationWord": False,
            "ignoreWeiboRemindWord": False,
            "ignoreWeiboTopicWord": False,
            "weiboType": [],
            "weiboAttestType": [],
            "weiboState": "",
            "isRepeat": "0",
            "browseRange": "",
            "isImportance": False,
            "noPicture": False,
            "orderBy": 1,
            "isHideSummary": False,
            "customCondition": [],
            "subjectModule": 1,
            "refreshType": 2,
            "pageSize": 30,
            "sites": [],
            "industryTags": [],
            "distinguishType": [],
            "videoDurationType": [],
            "regionalMatchType": [],
            "regionalMatch": [],
            "subjectArray": [],
            "sqSourceRange": [],
            "fansCountRange": "",
            "isSuspectedAi": "",
            "mcnType": "",
            "isFullscreen": False,
            "warningType": 1,
            "monitorType": 0,
            "language": 2,
            "offset": 0,
            "limitNum": 30,
            "timestamp": 1736156933015,
            "activeNav": 1,
            "backTrack": False
        },
        {
            "id": "b6b505a41a1b43cab74380b776fe0b78",
            "subjectType": 1,
            "timeRange": "1",
            "timeType": "1",
            "infoSource": "",
            "attitude": [],
            "sourceRange": "",
            "mediaType": [],
            "shortVideoType": [],
            "tvChannel": [],
            "tvColumn": [],
            "isOcr": "",
            "filterType": "1",
            "matchRange": "",
            "firstRegion": "100",
            "wordRange": "50",
            "uniqueRegion": True,
            "weiboTimeFilter": False,
            "ignoreWeiboLocationWord": False,
            "ignoreWeiboRemindWord": False,
            "ignoreWeiboTopicWord": False,
            "weiboType": [
                "1"
            ],
            "weiboAttestType": [
                "2"
            ],
            "weiboState": "",
            "isRepeat": "0",
            "browseRange": "",
            "isImportance": False,
            "noPicture": False,
            "orderBy": 1,
            "isHideSummary": False,
            "customCondition": [],
            "subjectModule": 1,
            "refreshType": 2,
            "pageSize": 30,
            "sites": [],
            "industryTags": [],
            "distinguishType": [],
            "videoDurationType": [],
            "regionalMatchType": [],
            "regionalMatch": [],
            "subjectArray": [],
            "sqSourceRange": [],
            "fansCountRange": "",
            "isSuspectedAi": "",
            "mcnType": "",
            "isFullscreen": False,
            "warningType": 1,
            "monitorType": 0,
            "language": 2,
            "offset": 0,
            "limitNum": 30,
            "timestamp": 1736156950107,
            "activeNav": 1,
            "backTrack": False
        },
        {
            "id": "33e5f657c90446a597a09210f93b646d",
            "subjectType": 1,
            "timeRange": "2",
            "timeType": "1",
            "infoSource": "",
            "attitude": [
                "2"
            ],
            "sourceRange": "",
            "mediaType": [],
            "shortVideoType": [],
            "tvChannel": [],
            "tvColumn": [],
            "isOcr": "",
            "filterType": "1",
            "matchRange": "",
            "firstRegion": "100",
            "wordRange": "50",
            "uniqueRegion": True,
            "weiboTimeFilter": False,
            "ignoreWeiboLocationWord": False,
            "ignoreWeiboRemindWord": False,
            "ignoreWeiboTopicWord": False,
            "weiboType": [],
            "weiboAttestType": [],
            "weiboState": "",
            "isRepeat": "0",
            "browseRange": "",
            "isImportance": False,
            "noPicture": False,
            "orderBy": 1,
            "isHideSummary": False,
            "customCondition": [],
            "subjectModule": 1,
            "refreshType": 2,
            "pageSize": 30,
            "sites": [],
            "industryTags": [],
            "distinguishType": [],
            "videoDurationType": [],
            "regionalMatchType": [],
            "regionalMatch": [],
            "subjectArray": [],
            "sqSourceRange": [],
            "fansCountRange": "",
            "isSuspectedAi": "",
            "mcnType": "",
            "isFullscreen": False,
            "warningType": 1,
            "monitorType": 0,
            "language": 2,
            "offset": 0,
            "limitNum": 30,
            "timestamp": 1736156980119,
            "activeNav": 1,
            "backTrack": False
        }
    ]

    return conf_list[k]

if __name__ == '__main__':
    main()
```



### 输出报告示例

<img src="./istarshine01.assets/image-20250122162036566.png" alt="image-20250122162036566" style="zoom:50%;" />