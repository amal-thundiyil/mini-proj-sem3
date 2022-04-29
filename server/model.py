from transformers import AutoModelForQuestionAnswering, AutoTokenizer, pipeline
import json

model_name = "emr-se-miniproject/roberta-base-emr"

class Query:
    def __init__(self):
        self.nlp = pipeline('question-answering', model=model_name, tokenizer=model_name)

    def query(self, context, question):
        self.QA_input = {
            'question': question,
            'context': context
        }

        self.res = self.nlp(self.QA_input)

        return self.res