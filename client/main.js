import { Locate } from '../imports/api/tasks.js';
import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import './../imports/ui/body.html'
import './../imports/ui/template.html'


    Template.body.events({
        'submit .new-task' (event){ 
            event.preventDefault();
            var target = event.target;
            var lat = target.lat.value;
            var long = target.long.value;
            console.log(lat);
        // Insert a Locate into the collection
    Locate.insert({
        lat,
        long,
        createdAt: new Date(), // current time
      });
        console.log(Locate); 
        }
    })

    Template.body.helpers({
        locate() {
          return Locate.find({});
        },
      });


