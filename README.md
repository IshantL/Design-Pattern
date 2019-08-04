# Design-Pattern

1. First we create a small game of cat clicker
  - It have a image of cat 
  - The number of clicks should be displayed.
2. Now the requirement change by the client:
  - The application should display two cats. Each cat includes the cat's name a picture of the cat text showing the number of clicks
  - The specifics of the layout do not matter, so style it however you'd like.
  - The number of clicks should increment when each cat picture is clicked.
3. Let's learn a topic Closures and event Listeners (refer closure.js)
  - If you run this code on any website, it will clear everything and add a bunch of numbers to the page. Try it! Open a new page, open the console, and run the above code. Then click on the numbers and see what gets alerted. Reading the code, we'd expect the numbers to alert their values when we click on them.But when we test it, all the elements alert the same thing: the last number. But why?

  - How do we fix it?
    The solution involves utilizing closures (refer closure solution commit)