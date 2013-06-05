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

var APIRequester;

APIRequester = this.APIRequester || (this.APIRequester = {});

//TODO: Display activity indicatory while performing requests

APIRequester.get = function(path, successFunction, errorFunction){
    auth_token = window.localStorage.getItem('auth_token');
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000' + path + '?auth_token=' + auth_token,
        dataType: "json",
        headers: {Accept: "application/json"},
        success: function(data){
           successFunction(data);
        },
        error: function(error){
           errorFunction(error );
        }
    });
}

APIRequester.post = function(path, body, successFunction, errorFunction){
    auth_token = window.localStorage.getItem('auth_token');
    $.ajax({
       type: 'POST',
       url: 'http://localhost:3000' + path + '?auth_token=' + auth_token,
       data: body,
       dataType: "json",
       headers: {Accept: "application/json"},
       success: function(){
           successFunction(data);
       },
       error: function(error){
           errorFunction(error );
       }
    });
}

APIRequester.signIn = function(body, successFunction, errorFunction){
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/users/sign_in',
        data: body,
        dataType: "json",
        headers: {Accept: "application/json"},
        success: function(data){
           successFunction(data);
        },
        error: function(error){
           errorFunction(error);
        }
    });
}

APIRequester.register = function(body, successFunction, errorFunction){
    $.ajax({
       type: 'POST',
       url: 'http://localhost:3000/users',
       data: body,
       dataType: "json",
       headers: {Accept: "application/json"},
       success: function(data){
           if(data.success){
              successFunction(data);
           }else{
              errorFunction(data);
           }
       },
       error: function(error){
           errorFunction(error);
       }
       });
}

