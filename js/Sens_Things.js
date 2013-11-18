$(function() {
var apiEndpoint = "http://demo.student.geocens.ca:8080/SensorThings_V1.0";
function request(setting) {
	if (setting.type === "PUT" || setting.type === "POST") {
        setting.data = JSON.parse(setting.data);
    }
	$.ajax({
        type: setting.type,
		url: setting.url,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(setting.data),
        crossDomain: true,
        dataType: "json",
        success:function (result){
		        alert(JSON.stringify(result));
		},
		error:function(Msg){
              alert(JSON.stringify(Msg));
        }
		})
        }
var swiot={
    };
swiot.Thing={
            get: function(id) {
                request({
                    type:"GET",
					url: apiEndpoint + "/Things(" + id +")"
                });
            },
			update: function(id, Jsondata) {
                request({
                    type: "PUT",
                    url: apiEndpoint + "/Things(" + id +")",
                    data: Jsondata
                });
            },
            "new": function(Jsondata) {
                request({
                    type: "POST",
                    url: apiEndpoint + "/Things",
                    data: Jsondata
                });
            },
            "delete": function(id) {
                request({
                    type: "DELETE",
                    url: apiEndpoint + "/Things(" + id +")"
                });
            } 
};
swiot.Location={
            get: function(id) {
                request({
                    type:"GET",
					url: apiEndpoint + "/Locations(" + id +")"
                });
            },
			update: function(id, Jsondata) {
                request({
                    type: "PUT",
                    url: apiEndpoint + "/Locations(" + id +")",
                    data: Jsondata
                });
            },
            "new": function(Jsondata) {
                request({
                    type: "POST",
                    url: apiEndpoint + "/Locations",
                    data: Jsondata
                });
            },
            "delete": function(id) {
                request({
                    type: "DELETE",
                    url: apiEndpoint + "/Locations(" + id +")"
                });
            } 
};
swiot.Datastream={
            get: function(id) {
                request({
                    type:"GET",
					url: apiEndpoint + "/Datastreams(" + id +")"
                });
            },
			update: function(id, Jsondata) {
                request({
                    type: "PUT",
                    url: apiEndpoint + "/Datastreams(" + id +")",
                    data: Jsondata
                });
            },
            "new": function(Jsondata) {
                request({
                    type: "POST",
                    url: apiEndpoint + "/Datastreams",
                    data: Jsondata
                });
            },
            "delete": function(id) {
                request({
                    type: "DELETE",
                    url: apiEndpoint + "/Datastreams(" + id +")"
                });
            } 
};

swiot.ObservedProperty={
            get: function(id) {
                request({
                    type:"GET",
					url: apiEndpoint + "/ObservedPropertys(" + id +")"
                });
            },
			update: function(id, Jsondata) {
                request({
                    type: "PUT",
                    url: apiEndpoint + "/ObservedPropertys(" + id +")",
                    data: Jsondata
                });
            },
            "new": function(Jsondata) {
                request({
                    type: "POST",
                    url: apiEndpoint + "/ObservedPropertys",
                    data: Jsondata
                });
            },
            "delete": function(id) {
                request({
                    type: "DELETE",
                    url: apiEndpoint + "/ObservedPropertys(" + id +")"
                });
            } 
};

swiot.FeaturesOflenterest={
            get: function(id) {
                request({
                    type:"GET",
					url: apiEndpoint + "/FeaturesOflenterests(" + id +")"
                });
            },
			update: function(id, Jsondata) {
                request({
                    type: "PUT",
                    url: apiEndpoint + "/FeaturesOflenterests(" + id +")",
                    data: Jsondata
                });
            },
            "new": function(Jsondata) {
                request({
                    type: "POST",
                    url: apiEndpoint + "/FeaturesOflenterests",
                    data: Jsondata
                });
            },
            "delete": function(id) {
                request({
                    type: "DELETE",
                    url: apiEndpoint + "/FeaturesOflenterests(" + id +")"
                });
            } 
};

swiot.TaskingCapability={
            get: function(id) {
                request({
                    type:"GET",
					url: apiEndpoint + "/TaskingCapabilitys(" + id +")"
                });
            },
			update: function(id, Jsondata) {
                request({
                    type: "PUT",
                    url: apiEndpoint + "/TaskingCapabilitys(" + id +")",
                    data: Jsondata
                });
            },
            "new": function(Jsondata) {
                request({
                    type: "POST",
                    url: apiEndpoint + "/TaskingCapabilitys",
                    data: Jsondata
                });
            },
            "delete": function(id) {
                request({
                    type: "DELETE",
                    url: apiEndpoint + "/TaskingCapabilitys(" + id +")"
                });
            } 
};

swiot.Actuator={
            get: function(id) {
                request({
                    type:"GET",
					url: apiEndpoint + "/Actuators(" + id +")"
                });
            },
			update: function(id, Jsondata) {
                request({
                    type: "PUT",
                    url: apiEndpoint + "/Actuators(" + id +")",
                    data: Jsondata
                });
            },
            "new": function(Jsondata) {
                request({
                    type: "POST",
                    url: apiEndpoint + "/Actuators",
                    data: Jsondata
                });
            },
            "delete": function(id) {
                request({
                    type: "DELETE",
                    url: apiEndpoint + "/Actuators(" + id +")"
                });
            } 
};
});