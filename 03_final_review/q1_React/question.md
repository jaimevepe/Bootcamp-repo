### Question:

Where in a react component would you put a function 
that you only want to invoke when said component mounts?

Include class and functional based ways of doing this

###
I would put the function it before the render as a componentWillMount()
functional const componentWillMount() => {}

### Feedback:

You are right about class based components, but not about function based
components.  Take a look at useEffect hook.