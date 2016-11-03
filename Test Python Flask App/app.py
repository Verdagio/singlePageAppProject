from flask import Flask,render_template

app = Flask(__name__)

#@ signifies a decorator -  Function
@app.route('/')
def index():
    return '<p>This is the Home page</p>'
	
@app.route('/topics')
def topic():
	return 'Topics are hear'
	
@app.route('/post/<int:post_id>')
def post(post_id):
	return 'Post Id is %s' % post_id
	


if __name__ == "__main__":
    app.run(debug = True)