/* global describe, it */

(function () {
    'use strict';

    describe('Interaction with classname of dom elements', function () {
        beforeEach(function() {
            var div = document.createElement('div');
            div.id = 'testDiv';
            div.className = 'testClass';
            document.body.appendChild(div);
        });
        afterEach(function() {
            var div = document.getElementById('testDiv');
            div.parentNode.removeChild(div);
        });
        describe('hasClassName', function () {
            it('should see only present classes', function () {
                var div = document.getElementById('testDiv');
                expect(div.hasClassName('testClass')).toBeTruthy();
                expect(div.hasClassName('noClass')).toBeFalsy();
            });
        });
        describe('addClass', function () {
            it('should add classes once', function () {
                var div = document.getElementById('testDiv');
                div.addClass('testClass2');
                expect(div.hasClassName('testClass2')).toBeTruthy();
                div.addClass('testClass2');
                // checks the number of time we see 'testClass2' in the div.className
                (div.className.match(/testClass2/g) || []).length;
                expect((div.className.match(/testClass2/g) || []).length).toBe(1);
            });
        });
        describe('removeClass', function () {
            it('should add classes once', function () {
                var div = document.getElementById('testDiv');
                div.addClass('testClass2');
                expect(div.hasClassName('testClass2')).toBeTruthy();
                div.removeClass('testClass');
                expect(div.hasClassName('testClass2')).toBeTruthy();
                expect(div.hasClassName('testClass')).toBeFalsy();
                div.removeClass('testClass');
                expect(div.hasClassName('testClass2')).toBeTruthy();
            });
        });
    });

    describe('Show more/less toggle', function () {
        beforeEach(function() {
            var div = document.createElement('div');
            div.id = 'testDiv';
            div.className = 'more hide';
            document.body.appendChild(div);
            var button = document.createElement('button');
            button.id = 'showMore';
            document.body.appendChild(button);
        });
        afterEach(function() {
            var div = document.getElementById('testDiv');
            div.parentNode.removeChild(div);
            var button = document.getElementById('showMore');
            button.parentNode.removeChild(button);
        });
        describe('testing the toggle', function () {
            it('should toggle the hide class and change the text of the button', function () {
                var div = document.getElementById('testDiv');
                var button = document.getElementById('showMore');
                wimdu.showMore();
                expect(div.hasClassName('hide')).toBeFalsy();
                expect(div.hasClassName('more')).toBeTruthy();
                expect(button.innerHTML).toBe('Show less');
                wimdu.showMore();
                expect(div.hasClassName('hide')).toBeTruthy();
                expect(div.hasClassName('more')).toBeTruthy();
                expect(button.innerHTML).toBe('Show more');
            });
        });
    });
})();
