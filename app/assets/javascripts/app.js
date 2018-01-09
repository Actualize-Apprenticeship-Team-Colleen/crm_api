/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      leads: [],
      time_format: "12/25/17",
      url: "https://www.google.com/",
      firstNameFilter: " ",
      lastNameFilter: " ",
      emailFilter: " ",
    },
    mounted: function() {
      $.get('/api/v1/leads.json').success(function(response) {
        // loop through all leads
        // add showEvents = false to each lead
        debugger
        for (var i = 0; i < response.length; i++) {
          Vue.set(response[i],"showEvents", false);
        }
        console.log("HELLO", response);
        this.leads = response;
      }.bind(this));
    },
    methods: {
      moment: function(date) {
        return moment(date);
      },
      
      toggleEvent: function(lead) {
        // console.log(lead);
        lead.isSeen = !lead.isSeen;
      },

      searchFirstName: function(search) {
        this.first_name.toLowerCase().indexOf(this.firstNameFilter) > -1;
      }
    },
    computed: {
      filter: function(lead) {
        debugger
        var firstName = lead.first_name.toLowerCase().indexOf(this.firstNameFilter) > -1;

        // var lastName = lead.last_name.toLowerCase().indexOf(this.lastNameFilter) > -1;

        // var email = lead.email.toLowerCase().indexOf(this.emailFilter) > -1;

        return firstName;

      },

    },
  });
});
