/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    'use strict';

    // Test RSS Feeds
    describe('RSS Feeds', function() {

        // Verify that the allFeeds array has each feed defined in it
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds instanceof Array).toBeTruthy();
            expect(allFeeds.length).not.toBe(0);
        });

        // Verify that each feed has a url header
        it('have a URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).toContain("http://" || "https://");
            });
        });

        // Verify that each feed has a name
        it('have a name', function() {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    // Test Feed Reader Menu
    describe('The Menu Toggle', function() {

        // Verify that menu is hidden
        it('should be hidden by default', function() {
            expect(document.body.className).toEqual("menu-hidden");
        });

        // Verify that clicking the hamburger icon toggles menu open and closed
        it('should slide open and closed when hamburger icon is clicked', function() {
            $('.menu-icon-link').click();
            expect(document.body.className).not.toEqual("menu-hidden");

            $('.menu-icon-link').click();
            expect(document.body.className).toEqual("menu-hidden");
        });
    });

    // Test Initial Entries
    describe('Initial Entries', function() {

        var container = $('.feed');

        // Verify there is at least one rss feed in the container after performing loadFeed
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('should have at least a single feed element in the feed container', function() {
            expect(container).not.toBeEmpty();
        });
    });

    // Test New Feed Selection
    describe('New Feed Selection', function() {
        var content1;
        var content2;
        // Verify new content has been loaded into container
        beforeEach(function(done) {
            loadFeed(0, function() {
                content1 = $('.feed').html();
                loadFeed(1, function() {
                    content2 = $('.feed').html();
                    done();
                });
            });
        });
        it('should have new content that is not the same as prior content', function() {
            expect(content1).not.toBe(content2);
        });
    });

}());
