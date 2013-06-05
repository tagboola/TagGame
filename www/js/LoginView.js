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

var LoginView = function(store) {
    this.initialize = function() {
        this.el = $('<div/>');
        
    };
    
    this.initialize();
    
    this.render = function() {
        this.el.html(LoginView.template());
        $('#loginForm').live('submit', this.loginSubmit);
        $('#loginSignupBtn').live('click', app.displaySignupView);
        return this;
    };
    
    this.loginSubmit = function() {
        data = {user: {email: $("#loginEmail").val(), password: $("#loginPassword").val()}};
        APIRequester.signIn(data, function(data){
            window.localStorage.setItem('auth_token', data.authentication_token);
            window.localStorage.setItem('user_id', data.user.id);
            alert(data.authentication_token);
            app.displayHomeView();
        }, function(data){
            alert(data.success);
        });
        return false;
    }
    
}

LoginView.template = Handlebars.compile($("#login-tmpl").html());


