# Project 6 - RSS Feed Reader Testing

This project demonstrates the use of [Jasmine](http://jasmine.github.io/) - a behavior-driven development framework for unit testing JavaScript code. 

## Viewing the Project

1. Download the zip file and unzip it into any covenient location on your computer.
2. Open index.html and scroll down to see the test results below the content of the page.

## Notes

* Tests reside in jasmine/spec/feedreader.js and this is where you would add any additional tests.
* My Project is located at: https://gitlab.com/lglaves/feedreader-master

## Tests Written

##### Test RSS Feeds
1. Ensure all RSS Feeds in the allFeeds array are defined.
2.  Ensure each RSS Feed has a URL defined and that the URL is not empty.
3.  Ensure each RSS Feed has a name defined and that the name is not empty.
##### Test the Menu
4. Ensure the menu element is hidden by default.
5.  Ensure the menu becomes visible when the menu icon is clicked and becomes hidden when the icon is clicked again.
##### Test Initial Entries
6. Ensure that the loadFeed function retrieves at least one entry element and stores it in the feed container.
##### Test New Feed Selection
7. Ensure that when a new feed is loaded by the loadFeed function, the content actually changes.

## Libraries and Frameworks Used

* [Jasmine](http://jasmine.github.io)
* [jQuery](http://jquery.com)
* [jasmine-jquery](https://github.com/velesin/jasmine-jquery)

## References

* [Introduction to Jasmine](http://jasmine.github.io/2.0/introduction.html)
* [Udacity Discussion Forum](https://discussions.udacity.com/c/nd001-feed-reader-testing)
* [Using Done Funtion](http://www.htmlgoodies.com/beyond/javascript/stips/using-jasmine-2.0s-new-done-function-to-test-asynchronous-processes.html)
* [Learn Handlebars](http://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes/)
