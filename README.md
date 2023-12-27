# Elysia Experiment
This is a project made to sample sending html and static files to the user using elysia. It should look fairly similar to what the output of inkdocs would be.


# Issues that need to be solved
- (x) getting static files such as images or css files
- ( ) getting "the right" html files
    - For example:
    - (x) / -> static/index.html
    - ( ) /hello -> static/hello.html or static/hello/index.html depending on which one exists
    - Current issue is that the router will fail if no .html is provided
