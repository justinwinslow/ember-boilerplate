/*
    APP CONFIG & INIT
*/

// Set debug mode [think about modifying this to be dynamic]
window.debug = true;

if (debug) console.log('init');

// Require config
require.config({
    paths: {
        // Libraries
        jquery: '../components/jquery/jquery',
        //underscore: '../components/underscore', I left this as a comment so you can see how aliasing paths can make "upgrades" easier
        underscore: '../components/lodash/lodash',
        ember: '../components/ember/ember',
        handlebars: '../components/handlebars/handlebars',
        modernizr: '../components/modernizr/modernizr',
        text: '../components/text/text',
        css: '../components/css/css',
        // Modules
        somemodule: 'modules/module'
    },
    shim: {
        ember: {
            deps: ['handlebars'],
            exports: 'Ember'
        },
        underscore: {
            exports: '_'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        modernizr: {
            exports: 'Modernizr'
        }
    }
});

// Start app
require(
    [
        'jquery',
        'underscore',
        'ember',
        'handlebars'
    ],
    function ($, _, Ember, Handlebars) {
        if (debug) console.log($);
        if (debug) console.log(_);
        if (debug) console.log(Ember);
        if (debug) console.log(Handlebars);

        window.MyApp = Ember.Application.create();

        MyApp.Router.map(function() {
            this.route("index", { path: "/" });
            this.route("stuff", { path: "/stuff" });
        });

        MyApp.IndexRoute = Ember.Route.extend({
            setupController: function(controller, model) {
                controller.set('content', {name: "Justin"});
            }
        });

        MyApp.StuffRoute = Ember.Route.extend({
            setupController: function(controller, model) {
                controller.set('content', {that: "stuff"});
            }
        });
    }
);