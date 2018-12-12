    
    var collection1 = "Population";
    var year = "2004";
    var config = null;

    var url = "http://127.0.0.1:8080/pieChart?Collection1=" + collection1 + "&Year=" + year;

    function  constructPieUrl()
    {
        url = "http://127.0.0.1:8080/pieChart?Collection1=" + collection1 + "&Year=" + year;
    }

    function pie_variable_1_change (show) {

        console.log('Map Variable Change--');
        console.log(show.value);

        collection1 = show.value;

        // config = config1;

        apiCallForPieData();

    }

    function yearPieChange (show) {

        console.log('Getting here');
        console.log(show.value);

        year        = show.value;
        
                // config = config1;

        apiCallForPieData();


    }

    function apiCallForPieData () {

      config = config;

      constructPieUrl();
      console.log('PieURL - ' + url);

      $.getJSON( url ,
       function( data ) {
            
            var newData = {};
            newData["containerId"] = "chartContainer";
            newData["data"] = data;

            config = newData;

            console.log('New Data');
            console.log(config);

            var samplePie = new psd3.Pie(config);

      // });

        });
    }

    console.log('Gonna Call API');
    apiCallForPieData();


    
    // var config1 = {
    //     containerId: "chartContainer",
    //     data: [{
    //         value: 25,
    //         label: "Maharashtra"
    //     }, {
    //         value: 50,
    //         label: "Gujarat"
    //     }],
    // };

    // var config = {
    // containerId: "chartContainer",
    // data: [{
    //     value: 25,
    //     label: "Maharashtra",
    //     inner: [
    //     {
    //         value: 10,
    //         label: "Mumbai"
    //     },
    //     {
    //         value: 15,
    //         label: "Pune"
    //     }, {
    //         value: 10,
    //         label: "Mumbai"
    //     },
    //     {
    //         value: 15,
    //         label: "Pune"
    //     }, {
    //         value: 10,
    //         label: "Mumbai"
    //     },
    //     {
    //         value: 15,
    //         label: "Pune"
    //     }, {
    //         value: 10,
    //         label: "Mumbai"
    //     }]
    // }, {
    //     value: 50,
    //     label: "Gujarat",
    //     inner: [{
    //         value: 20,
    //         label: "Surat"
    //     }, {
    //         value: 30,
    //         label: "Rajkot"
    //     }]
    // }],
    // };
