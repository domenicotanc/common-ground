import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import bootbox from 'bootbox';
import $ from 'jquery';
import { HTTP } from 'meteor/http';

FlowRouter.route('/', {
  name: 'Pages.landing',
  action: function() {
    BlazeLayout.render("landing", {content: "home"});
  }
});

FlowRouter.route('/#pricing', {
  name: 'Pages.landing.overview',
  action: function() {
    BlazeLayout.render("landing", {content: "home"});
  }
});

FlowRouter.route('/', {
  name: 'Pages.landing.pricing',
  action: function() {
    BlazeLayout.render("landing", {content: "home"});
  }
});

FlowRouter.route('/kitchen', {
  name: 'Pages.kitchen',
  action: function() {
    BlazeLayout.render("kitchen", {content: "kitchenInfo"});
    $(window).scrollTop(0);
  }
});

FlowRouter.route('/mentors', {
  name: 'Pages.mentors',
  action: function() {
    BlazeLayout.render("mentors", {content: "mentorsInfo"});
    $(window).scrollTop(0);
  }
});

FlowRouter.route('/users', {
  name: 'Pages.users',
  action: function() {
    BlazeLayout.render("users", {content: "users"});
    $(window).scrollTop(0);
  }
});

FlowRouter.route('/appointments', {
  name: 'Pages.user.appointments',
  action: function() {
    BlazeLayout.render("appointments", {content: "appointments"});
    $(window).scrollTop(0);
  }
});

FlowRouter.route('/schedule', {
  name: 'Pages.user.schedule',
  action: function() {
    BlazeLayout.render("schedule", {content: "schedule"});
    $(window).scrollTop(0);
  }
});

FlowRouter.route('/plan', {
  name: 'Pages.user.plan',
  action: function() {
    BlazeLayout.render("plan", {content: "plan"});
    $(window).scrollTop(0);
  }
});
