from transformers import AutoModelForQuestionAnswering, AutoTokenizer, pipeline

class pipeLine:

    def __init__(self):

        self.model_answer_name = "fadhilarkan/distilbert-base-uncased-finetuned-squad"
        self.model_question_name = "fadhilarkan/t5-small-finetuned-xsum"
        self.nlp_answer = pipeline('question-answering', model=self.model_answer_name, tokenizer=self.model_answer_name)
        self.nlp_question = pipeline('text2text-generation', model=self.model_question_name, tokenizer=self.model_question_name)

    def generate_question(self,context):

        input = "summarize" + str(context)

        question = self.nlp_question(input)

        return question[0]['generated_text']

    def predict_answer(self,context,question):

        input = {'question': question,
                 'context': context
                }

        answer = self.nlp_answer(input)

        return answer['answer']
