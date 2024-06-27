from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
@app.route("/Portfolio")
@app.route("/Home")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/projects")
def project():
    return render_template("project.html")

@app.route("/blogs")
def blogs():
    return render_template("blog.html")

@app.route("/certificates")
def certificates():
    return render_template("certificates.html")

@app.route("/coding-profiles")
@app.route("/profiles")
@app.route("/coding")
def codingprofiles():
    return render_template("profiles.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/projects/<name>")
def projectpage(name):
    return render_template(f"{name}.html")



if __name__ == "__main__":
    app.run(debug=True)