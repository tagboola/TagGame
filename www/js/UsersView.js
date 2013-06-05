/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var UsersView = function(store) {
    this.initialize = function() {
        this.el = $('<div/>');
        APIRequester.get('/users', function(data){
           this.players = data;
           for(i = 0; i < data.length; ++i){
              li = '<li><div class="todo-icon fui-user"></div>';
              li += '<div class="todo-content"><h4 class="todo-name">';
              li += data[i].first_name + ' ' + data[i].last_name;
              li += '</h4>' + data[i].email + '</div></li>'
              $('#usersList').append(li);
           }
        }, function(data) {
           alert(data);
        });
    };
    
    this.initialize();
    
    this.render = function() {
        this.el.html(UsersView.template());
        $('#usersCancelBtn').live('click', app.displayNewGameView);
        $('#usersDoneBtn').live('click', this.doneClicked);
        $('#usersList li').live('click',this.userClicked);
        return this;
    };
    
    this.doneClicked = function() {
        playersToInvite = [];
        $('#usersList li').each(function(index) {
           if($(this).attr('class') == 'todo-done'){
              playersToInvite.push(players[i])
           }
        });
    };
    
    this.userClicked = function() {
        $(this).toggleClass('todo-done');
    };
    
    this.players;
    
    
}

UsersView.template = Handlebars.compile($("#users-tmpl").html());
