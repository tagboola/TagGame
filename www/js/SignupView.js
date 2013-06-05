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

var SignupView = function(store) {
    this.initialize = function() {
        this.el = $('<div/>');
    };
    
    this.initialize();
    
    this.render = function() {
        this.el.html(SignupView.template());
        $('#signupForm').live('submit', this.signupSubmit);
        $('#signupCancelBtn').live('click', app.displayLoginView);
        return this;
    };
    
    this.signupSubmit = function () {
        data = {user: {first_name: $('#signupFirstName').val(),
            last_name: $('#signupLastName').val(),
            email: $('#signupEmail').val(),
            password: $('#signupPassword').val(),
            password_confirmation: $('#signupPasswordConfirmation').val()}};
        APIRequester.register(data, function(data){
            window.localStorage.setItem('auth_token', data.authentication_token);
            window.localStorage.setItem('user_id', data.user.id);
            alert('Registration successful');
            displayHomeView();
        }, function(data) {
            alert('Registration unsuccessful');
        });
        return false;
    }
}

SignupView.template = Handlebars.compile($("#signup-tmpl").html());
