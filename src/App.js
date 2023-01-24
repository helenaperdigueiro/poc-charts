import './App.css';
import BarChart from './components/BarChart/BarChart';
import MapChart from './components/MapChart/MapChart';
import PieChart from './components/PieChart/PieChart';

function App() {
  const dataBar = [
    {
      "country": "AD",
      "hot dog": 92,
      "hot dogColor": "hsl(244, 70%, 50%)",
      "burger": 51,
      "burgerColor": "hsl(297, 70%, 50%)",
      "sandwich": 200,
      "sandwichColor": "hsl(88, 70%, 50%)",
      "kebab": 145,
      "kebabColor": "hsl(289, 70%, 50%)",
      "fries": 13,
      "friesColor": "hsl(349, 70%, 50%)",
      "donut": 81,
      "donutColor": "hsl(284, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 132,
      "hot dogColor": "hsl(90, 70%, 50%)",
      "burger": 65,
      "burgerColor": "hsl(45, 70%, 50%)",
      "sandwich": 75,
      "sandwichColor": "hsl(11, 70%, 50%)",
      "kebab": 145,
      "kebabColor": "hsl(223, 70%, 50%)",
      "fries": 12,
      "friesColor": "hsl(2, 70%, 50%)",
      "donut": 83,
      "donutColor": "hsl(3, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 94,
      "hot dogColor": "hsl(303, 70%, 50%)",
      "burger": 29,
      "burgerColor": "hsl(195, 70%, 50%)",
      "sandwich": 126,
      "sandwichColor": "hsl(130, 70%, 50%)",
      "kebab": 16,
      "kebabColor": "hsl(70, 70%, 50%)",
      "fries": 121,
      "friesColor": "hsl(235, 70%, 50%)",
      "donut": 160,
      "donutColor": "hsl(43, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 31,
      "hot dogColor": "hsl(148, 70%, 50%)",
      "burger": 47,
      "burgerColor": "hsl(318, 70%, 50%)",
      "sandwich": 130,
      "sandwichColor": "hsl(5, 70%, 50%)",
      "kebab": 50,
      "kebabColor": "hsl(166, 70%, 50%)",
      "fries": 187,
      "friesColor": "hsl(95, 70%, 50%)",
      "donut": 40,
      "donutColor": "hsl(250, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 39,
      "hot dogColor": "hsl(23, 70%, 50%)",
      "burger": 64,
      "burgerColor": "hsl(74, 70%, 50%)",
      "sandwich": 157,
      "sandwichColor": "hsl(261, 70%, 50%)",
      "kebab": 40,
      "kebabColor": "hsl(54, 70%, 50%)",
      "fries": 87,
      "friesColor": "hsl(244, 70%, 50%)",
      "donut": 161,
      "donutColor": "hsl(312, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 62,
      "hot dogColor": "hsl(345, 70%, 50%)",
      "burger": 66,
      "burgerColor": "hsl(129, 70%, 50%)",
      "sandwich": 106,
      "sandwichColor": "hsl(204, 70%, 50%)",
      "kebab": 15,
      "kebabColor": "hsl(291, 70%, 50%)",
      "fries": 195,
      "friesColor": "hsl(281, 70%, 50%)",
      "donut": 196,
      "donutColor": "hsl(26, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 147,
      "hot dogColor": "hsl(290, 70%, 50%)",
      "burger": 145,
      "burgerColor": "hsl(300, 70%, 50%)",
      "sandwich": 132,
      "sandwichColor": "hsl(233, 70%, 50%)",
      "kebab": 158,
      "kebabColor": "hsl(291, 70%, 50%)",
      "fries": 99,
      "friesColor": "hsl(243, 70%, 50%)",
      "donut": 128,
      "donutColor": "hsl(27, 70%, 50%)"
    }
  ]

  const dataPie = [
    {
      "id": "php",
      "label": "php",
      "value": 336,
      "color": "hsl(130, 70%, 50%)"
    },
    {
      "id": "rust",
      "label": "rust",
      "value": 547,
      "color": "hsl(353, 70%, 50%)"
    },
    {
      "id": "lisp",
      "label": "lisp",
      "value": 536,
      "color": "hsl(322, 70%, 50%)"
    },
    {
      "id": "make",
      "label": "make",
      "value": 548,
      "color": "hsl(14, 70%, 50%)"
    },
    {
      "id": "java",
      "label": "java",
      "value": 1,
      "color": "hsl(62, 70%, 50%)"
    }
  ]

  const dataMap = [
    {
      "id": "AFG",
      "value": 551944
    },
    {
      "id": "AGO",
      "value": 945219
    },
    {
      "id": "ALB",
      "value": 374745
    },
    {
      "id": "ARE",
      "value": 436259
    },
    {
      "id": "ARG",
      "value": 201327
    },
    {
      "id": "ARM",
      "value": 248766
    },
    {
      "id": "ATA",
      "value": 7344
    },
    {
      "id": "ATF",
      "value": 706295
    },
    {
      "id": "AUT",
      "value": 467548
    },
    {
      "id": "AZE",
      "value": 976412
    },
    {
      "id": "BDI",
      "value": 96488
    },
    {
      "id": "BEL",
      "value": 770330
    },
    {
      "id": "BEN",
      "value": 842487
    },
    {
      "id": "BFA",
      "value": 641007
    },
    {
      "id": "BGD",
      "value": 936593
    },
    {
      "id": "BGR",
      "value": 236225
    },
    {
      "id": "BHS",
      "value": 492057
    },
    {
      "id": "BIH",
      "value": 554926
    },
    {
      "id": "BLR",
      "value": 846949
    },
    {
      "id": "BLZ",
      "value": 785976
    },
    {
      "id": "BOL",
      "value": 361123
    },
    {
      "id": "BRN",
      "value": 190344
    },
    {
      "id": "BTN",
      "value": 751765
    },
    {
      "id": "BWA",
      "value": 193241
    },
    {
      "id": "CAF",
      "value": 133291
    },
    {
      "id": "CAN",
      "value": 714517
    },
    {
      "id": "CHE",
      "value": 517944
    },
    {
      "id": "CHL",
      "value": 20994
    },
    {
      "id": "CHN",
      "value": 929617
    },
    {
      "id": "CIV",
      "value": 104493
    },
    {
      "id": "CMR",
      "value": 48809
    },
    {
      "id": "COG",
      "value": 858813
    },
    {
      "id": "COL",
      "value": 131962
    },
    {
      "id": "CRI",
      "value": 978400
    },
    {
      "id": "CUB",
      "value": 503918
    },
    {
      "id": "-99",
      "value": 803228
    },
    {
      "id": "CYP",
      "value": 382055
    },
    {
      "id": "CZE",
      "value": 920949
    },
    {
      "id": "DEU",
      "value": 142639
    },
    {
      "id": "DJI",
      "value": 503084
    },
    {
      "id": "DNK",
      "value": 563468
    },
    {
      "id": "DOM",
      "value": 430687
    },
    {
      "id": "DZA",
      "value": 63129
    },
    {
      "id": "ECU",
      "value": 410915
    },
    {
      "id": "EGY",
      "value": 399628
    },
    {
      "id": "ERI",
      "value": 909559
    },
    {
      "id": "ESP",
      "value": 187629
    },
    {
      "id": "EST",
      "value": 643974
    },
    {
      "id": "ETH",
      "value": 157857
    },
    {
      "id": "FIN",
      "value": 240126
    },
    {
      "id": "FJI",
      "value": 404687
    },
    {
      "id": "FLK",
      "value": 242813
    },
    {
      "id": "FRA",
      "value": 427961
    },
    {
      "id": "GAB",
      "value": 85201
    },
    {
      "id": "GBR",
      "value": 510902
    },
    {
      "id": "GEO",
      "value": 985495
    },
    {
      "id": "GHA",
      "value": 3771
    },
    {
      "id": "GIN",
      "value": 586343
    },
    {
      "id": "GMB",
      "value": 370658
    },
    {
      "id": "GNB",
      "value": 404801
    },
    {
      "id": "GNQ",
      "value": 707286
    },
    {
      "id": "GRC",
      "value": 136251
    },
    {
      "id": "GTM",
      "value": 492756
    },
    {
      "id": "GUY",
      "value": 568503
    },
    {
      "id": "HND",
      "value": 139762
    },
    {
      "id": "HRV",
      "value": 830754
    },
    {
      "id": "HTI",
      "value": 888756
    },
    {
      "id": "HUN",
      "value": 234755
    },
    {
      "id": "IDN",
      "value": 341732
    },
    {
      "id": "IND",
      "value": 797018
    },
    {
      "id": "IRL",
      "value": 39059
    },
    {
      "id": "IRN",
      "value": 791538
    },
    {
      "id": "IRQ",
      "value": 74068
    },
    {
      "id": "ISL",
      "value": 529204
    },
    {
      "id": "ISR",
      "value": 957202
    },
    {
      "id": "ITA",
      "value": 272630
    },
    {
      "id": "JAM",
      "value": 781932
    },
    {
      "id": "JOR",
      "value": 857453
    },
    {
      "id": "JPN",
      "value": 360098
    },
    {
      "id": "KAZ",
      "value": 707608
    },
    {
      "id": "KEN",
      "value": 606221
    },
    {
      "id": "KGZ",
      "value": 731151
    },
    {
      "id": "KHM",
      "value": 104385
    },
    {
      "id": "OSA",
      "value": 445527
    },
    {
      "id": "KWT",
      "value": 361029
    },
    {
      "id": "LAO",
      "value": 174934
    },
    {
      "id": "LBN",
      "value": 602860
    },
    {
      "id": "LBR",
      "value": 529664
    },
    {
      "id": "LBY",
      "value": 811803
    },
    {
      "id": "LKA",
      "value": 760315
    },
    {
      "id": "LSO",
      "value": 977570
    },
    {
      "id": "LTU",
      "value": 59832
    },
    {
      "id": "LUX",
      "value": 622445
    },
    {
      "id": "LVA",
      "value": 32464
    },
    {
      "id": "MAR",
      "value": 365341
    },
    {
      "id": "MDA",
      "value": 737945
    },
    {
      "id": "MDG",
      "value": 931321
    },
    {
      "id": "MEX",
      "value": 615181
    },
    {
      "id": "MKD",
      "value": 24093
    },
    {
      "id": "MLI",
      "value": 121521
    },
    {
      "id": "MMR",
      "value": 702665
    },
    {
      "id": "MNE",
      "value": 123225
    },
    {
      "id": "MNG",
      "value": 440005
    },
    {
      "id": "MOZ",
      "value": 582942
    },
    {
      "id": "MRT",
      "value": 661536
    },
    {
      "id": "MWI",
      "value": 259885
    },
    {
      "id": "MYS",
      "value": 951356
    },
    {
      "id": "NAM",
      "value": 189092
    },
    {
      "id": "NCL",
      "value": 87010
    },
    {
      "id": "NER",
      "value": 546487
    },
    {
      "id": "NGA",
      "value": 778641
    },
    {
      "id": "NIC",
      "value": 624742
    },
    {
      "id": "NLD",
      "value": 329720
    },
    {
      "id": "NOR",
      "value": 288726
    },
    {
      "id": "NPL",
      "value": 326030
    },
    {
      "id": "NZL",
      "value": 269393
    },
    {
      "id": "OMN",
      "value": 966040
    },
    {
      "id": "PAK",
      "value": 605746
    },
    {
      "id": "PAN",
      "value": 244643
    },
    {
      "id": "PER",
      "value": 810061
    },
    {
      "id": "PHL",
      "value": 825306
    },
    {
      "id": "PNG",
      "value": 696989
    },
    {
      "id": "POL",
      "value": 168594
    },
    {
      "id": "PRI",
      "value": 694332
    },
    {
      "id": "PRT",
      "value": 685151
    },
    {
      "id": "PRY",
      "value": 472859
    },
    {
      "id": "QAT",
      "value": 323487
    },
    {
      "id": "ROU",
      "value": 904137
    },
    {
      "id": "RUS",
      "value": 636514
    },
    {
      "id": "RWA",
      "value": 917769
    },
    {
      "id": "ESH",
      "value": 287213
    },
    {
      "id": "SAU",
      "value": 295961
    },
    {
      "id": "SDN",
      "value": 277799
    },
    {
      "id": "SDS",
      "value": 936052
    },
    {
      "id": "SEN",
      "value": 970862
    },
    {
      "id": "SLB",
      "value": 311019
    },
    {
      "id": "SLE",
      "value": 452698
    },
    {
      "id": "SLV",
      "value": 214874
    },
    {
      "id": "ABV",
      "value": 958413
    },
    {
      "id": "SOM",
      "value": 165036
    },
    {
      "id": "SRB",
      "value": 789060
    },
    {
      "id": "SUR",
      "value": 35640
    },
    {
      "id": "SVK",
      "value": 434459
    },
    {
      "id": "SVN",
      "value": 181357
    },
    {
      "id": "SWZ",
      "value": 704138
    },
    {
      "id": "SYR",
      "value": 181130
    },
    {
      "id": "TCD",
      "value": 475281
    },
    {
      "id": "TGO",
      "value": 426625
    },
    {
      "id": "THA",
      "value": 249921
    },
    {
      "id": "TJK",
      "value": 345484
    },
    {
      "id": "TKM",
      "value": 232962
    },
    {
      "id": "TLS",
      "value": 256485
    },
    {
      "id": "TTO",
      "value": 523836
    },
    {
      "id": "TUN",
      "value": 920794
    },
    {
      "id": "TUR",
      "value": 762869
    },
    {
      "id": "TWN",
      "value": 101213
    },
    {
      "id": "TZA",
      "value": 775134
    },
    {
      "id": "UGA",
      "value": 960200
    },
    {
      "id": "UKR",
      "value": 278909
    },
    {
      "id": "URY",
      "value": 518173
    },
    {
      "id": "USA",
      "value": 431896
    },
    {
      "id": "UZB",
      "value": 899536
    },
    {
      "id": "VEN",
      "value": 919160
    },
    {
      "id": "VNM",
      "value": 858002
    },
    {
      "id": "VUT",
      "value": 489062
    },
    {
      "id": "PSE",
      "value": 401734
    },
    {
      "id": "YEM",
      "value": 609222
    },
    {
      "id": "ZAF",
      "value": 462114
    },
    {
      "id": "ZMB",
      "value": 58193
    },
    {
      "id": "ZWE",
      "value": 915718
    },
    {
      "id": "KOR",
      "value": 533156
    }
  ]

  return (
    <div className="container">
      <div className='first-line'>
        <div className='placeholder'>
          <h3>Lorem ipsum dolor</h3>
        </div>
        <div className="placeholder">
          <h3>Lorem ipsum dolor</h3>
          <div className='map-chart'>
          <MapChart data={dataMap} />
          </div>
        </div>
      </div>

      <div className='second-line'>
        <div className='placeholder'>
          <h3>Lorem ipsum dolor</h3>
        </div>
        <div className="placeholder">
          <h3>Lorem ipsum dolor</h3>
          <div className='pie-chart-big'>
          <PieChart data={dataPie} />
          </div>
        </div>
      </div>

      <div className='third-line'>
        <div className='placeholder'>
          <h3>Lorem ipsum dolor</h3>
        </div>
        <div className="placeholder">
          <h3>Lorem ipsum dolor</h3>
          <div className="bar-chart">
          <BarChart data={dataBar} />
          </div>
        </div>

        <div className='placeholder'>
          <h3>Lorem ipsum dolor</h3>
          <div className="pie-chart-small">
            <PieChart data={dataPie} />
          </div>
          <div className="pie-chart-small">
            <PieChart data={dataPie} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
