/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage redirect to /reminders and display all reminders', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.reminder-item').length, 5);
  });
});

test('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders');
  click('.reminder-item:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/reminder/1');
    assert.equal(Ember.$('.reminder-item:first').text().trim(), Ember.$('.reminder-title').text().trim());
  });
});

test('add new reminder to the page', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders');
  andThen(function() {
    assert.equal(Ember.$('.reminder-item').length, 5)
  });
  click('.new-button');

  fillIn('.title-input', 'This is a title')
  fillIn('.reminder-input', 'This is a reminder')

  click('.submit-btn')

  andThen(function() {
    assert.equal(Ember.$('.reminder-item').length, 6)
    assert.equal(Ember.$('.reminder-item:last').text(), 'This is a title')
  });
});
