import pandas as pd
import json

'''
{
    [
        {
            context: 
            questions: [
                            {
                                q_id:
                                text:
                            } 
                    ]
            answers: [
                            {
                                start: 
                                end:
                                q_id:
                                answer:
                            }
                    ]
            ]
        }
    ]
}
'''

address = "D:\\Mini Project SE\\n2c2-community-annotations_2014-pampari-question-answering\\n2c2-community-annotations_2014-pampari-question-answering\\dataset\\data.json"

f = open(address)
data = json.load(f)


print(data["data"][0])