from transformers import AutoModelForQuestionAnswering, AutoTokenizer, pipeline
from transformers import T5ForConditionalGeneration, T5Tokenizer

class pipeLine_indo:

    def __init__(self):

        self.model_answer_name = "fadhilarkan/qa-indo-k"
        self.model_question_name = "fadhilarkan/gq-indo-k"
        self.model_paraphrase = T5ForConditionalGeneration.from_pretrained('fadhilarkan/tmpvqruuuz0')
        self.model_paraphrase_token = T5Tokenizer.from_pretrained('panggi/t5-base-indonesian-summarization-cased')
        self.paraphrase_maxlen = 256

        self.nlp_answer = pipeline('question-answering', model=self.model_answer_name, tokenizer=self.model_answer_name)
        self.nlp_question = pipeline('text2text-generation', model=self.model_question_name, tokenizer=self.model_question_name)

    def generate_question(self,context):

        input = str(context)

        question = self.nlp_question(input)

        return question[0]['generated_text']

    def predict_answer(self,context,question):

        input = {'question': question,
                 'context': context
                }

        answer = self.nlp_answer(input)

        return answer['answer']

    def paraphrase(self,sentence):

        text =  "paraphrase: " + sentence + " </s>"
        encoding = self.model_paraphrase_token.encode_plus(text,pad_to_max_length=True, return_tensors="pt")
        input_ids, attention_masks = encoding["input_ids"], encoding["attention_mask"]
        beam_outputs = self. model_paraphrase.generate(input_ids=input_ids, attention_mask=attention_masks,
                                      do_sample=True,max_length=256,top_k=220,top_p=1,
                                      early_stopping=True,num_return_sequences=5
                                     )
        final_outputs =[]
        for beam_output in beam_outputs:
            sent =self.model_paraphrase_token.decode(beam_output, skip_special_tokens=True,clean_up_tokenization_spaces=True)
            if sent.lower() != sentence.lower() and sent not in final_outputs:
                final_outputs.append(sent)

        return final_outputs