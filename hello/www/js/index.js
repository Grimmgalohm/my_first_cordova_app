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

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

	$(document).ready(function(){

		console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

		$(".head-nav h2").html("Inicio");

		$(".gps").on("click", function(){

			$(".head-nav h2").html("Geolocalización.");

			$(".icon").removeClass("hidden");
			$(".gps").addClass("hidden");
			$(".dterm").addClass("hidden");
			$(".save").addClass("hidden");
			$(".getData").removeClass("hidden");

		var onSuccess = function(position) {

			/*alert('Latitude: '          + position.coords.latitude          + '\n' +
				'Longitude: '         + position.coords.longitude         + '\n' +
				'Altitude: '          + position.coords.altitude          + '\n' +
				'Accuracy: '          + position.coords.accuracy          + '\n' +
				'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
				'Heading: '           + position.coords.heading           + '\n' +
				'Speed: '             + position.coords.speed             + '\n' +
				'Timestamp: '         + position.timestamp                + '\n');*/

			let theLat = position.coords.latitude;
			let theLong = position.coords.longitude;

			$(".getData").html("Your position is: Lat <label>"+theLat+"</label>, Long <label>"+theLong+"</label>.");

		};

		// onError Callback receives a PositionError object
		//

		function onError(error) {

			alert('code: '    + error.code    + '\n' +
				'message: ' + error.message + '\n');
		}

		navigator.geolocation.getCurrentPosition(onSuccess, onError);

	}); //Get location function ends

	$(".icon").on("click", function(){
		$(".head-nav h2").html("Inicio");
		$(".gps").removeClass("hidden");
		$(".save").removeClass("hidden");
		$(".dterm").removeClass("hidden");
		$(".getData").empty();//.addClass("hidden");
		$(".icon").addClass("hidden");
	});

	$(".dterm").on("click", function(){
		$(".head-nav h2").html("Datos del Terminal.");
		$(".icon").removeClass("hidden");
		$(".gps").addClass("hidden");
		$(".dterm").addClass("hidden");
		$(".save").addClass("hidden");
		$(".getData").removeClass("hidden");
		$(".getData").html(
			"S.O. y versión: "+device.platform+" "+device.version+"<br>"+
			"Modelo: "+device.model+"<br>"+
			"Fabricante: "+device.manufacturer+"<br>"+
			"N° de serie: "+device.serial+"<br>"
			);


	});//Get Device info ends

	$(".save").on("click", function(){
		$(".head-nav h2").html("Save Data.");
		$(".icon").removeClass("hidden");
		$(".gps").addClass("hidden");
		$(".dterm").addClass("hidden");
		$(".save").addClass("hidden");
		$(".getData").removeClass("hidden");

		$(".getData").html("Waiting response...");

		$.ajax({
            type: "POST",
            url: "http://192.168.100.28/rest/index.php",
            data: JSON.stringify({latitud:theLat,longitud:theLong}),
            cache: false,
            crossDomain: true,
            dataType: 'JSON',
            success: function(msg){
            	$(".getData").empty();
                $(".getData").html("Saving was: "+msg.status);
            },
            error: function(msg){
            	$(".getData").empty();
                $(".getData").html("Service is not available "+msg.status);

            }
        });

	});

	});//Ends document ready jquery

}
