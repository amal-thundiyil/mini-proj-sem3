from transformers import AutoModelForQuestionAnswering, AutoTokenizer, pipeline
import json

model_name = "deepset/roberta-base-squad2-covid"

class Query:
    def _init_(self):
        self.nlp = pipeline('question-answering', model=model_name, tokenizer=model_name)

    def query(self, context, question):
        self.QA_input = {
            'question': question,
            'context': context
        }

        self.res = self.nlp(self.QA_input)

        return self.res