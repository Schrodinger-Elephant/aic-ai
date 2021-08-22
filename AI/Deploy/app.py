
from flask import Flask, render_template, url_for, request, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from model import pipeLine

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Data.db'
db = SQLAlchemy(app)
print("loading model")
pipeline = pipeLine()
print("model loaded...")

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    context = db.Column(db.String(2000), nullable=True)
    question = db.Column(db.String(200), nullable=True)
    answer = db.Column(db.String(200), nullable=True)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Task %r>' % self.id


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        task_context = request.get_json()
        if (task_context==None) :
           task_context = request.form['context']
        else :
           task_context = task_context['context']
        question = pipeline.generate_question(task_context)
        answer = pipeline.predict_answer(task_context, question)
        new_task = Todo(context=task_context, question=question, answer=answer)

        try:
            db.session.add(new_task)
            db.session.commit()
            return redirect('/')
        except:
            return 'There was an issue adding your task'

    else:
        tasks = Todo.query.order_by(Todo.date_created).all()
        return render_template('index.html', tasks=tasks)


@app.route('/genpre', methods=['POST'])
def genpre():
    if request.method == 'POST':
        task_context = request.get_json()
        task_context = task_context['context']
        question = pipeline.generate_question(task_context)
        answer = pipeline.predict_answer(task_context, question)

        try:
            return jsonify({'context': task_context, 'question': question, 'answer': answer}) 
        except:
            return 'There is an issue'


@app.route('/delete/<int:id>')
def delete(id):
    task_to_delete = Todo.query.get_or_404(id)

    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return 'There was a problem deleting that task'

@app.route('/update/<int:id>', methods=['GET', 'POST'])
def update(id):
    task = Todo.query.get_or_404(id)

    if request.method == 'POST':
        task.context = request.form['context']

        try:
            db.session.commit()
            return redirect('/')
        except:
            return 'There was an issue updating your task'

    else:
        return render_template('update.html', task=task)


if __name__ == "__main__":
    app.run(host="10.142.0.7",debug=True)
