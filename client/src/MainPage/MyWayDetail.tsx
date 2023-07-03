import React from 'react';
import './Main.css';

// 페이지 작업용 검색 결과 json 값 추가.
interface wayInfo {
  name : string,
  distance : number,
  state : string,
  stateText : string,
  duration : number,

}


const MyWayDetail: React.FC = () => {

  const wayResult = {
    trans_id: '0188fbec0082724392ac52fe9e946e49',
    routes: [
      {
        result_code: 0,
        result_msg: '길찾기 성공',
        summary: {
          origin: {
            name: '',
            x: 127.37761406703146,
            y: 36.349267414162014,
          },
          destination: {
            name: '',
            x: 127.38198227349935,
            y: 36.35620266001714,
          },
          waypoints: [],
          priority: 'RECOMMEND',
          bound: {
            min_x: 127.37743387956787,
            min_y: 36.34950981274559,
            max_x: 127.38298786635485,
            max_y: 36.355847357444766,
          },
          fare: {
            taxi: 3300,
            toll: 0,
          },
          distance: 1170,
          duration: 269,
        },
        sections: [
          {
            distance: 1170,
            duration: 269,
            bound: {
              min_x: 127.3819739814907,
              min_y: 36.34951161144906,
              max_x: 127.3829957608514,
              max_y: 36.35584211794818,
            },
            roads: [
              {
                name: '',
                distance: 35,
                duration: 5,
                traffic_speed: 28,
                traffic_state: 0,
                vertexes: [
                  127.37777924062172, 36.34951161144906, 127.3774326598655,
                  36.34966301866899,
                ],
              },
              {
                name: '대덕대로',
                distance: 479,
                duration: 73,
                traffic_speed: 45,
                traffic_state: 4,
                vertexes: [
                  127.3774326598655, 36.34966301866899, 127.37850012880077,
                  36.351326872479014, 127.3790946550512, 36.35222219897972,
                  127.3792047778375, 36.35238499582129, 127.37932496913857,
                  36.352683032105084, 127.3793903853496, 36.35286362152033,
                  127.37944458914623, 36.35305316515289, 127.37947629620568,
                  36.35326962938573, 127.37948486268036, 36.35359412322795,
                ],
              },
              {
                name: '대덕대로234번길',
                distance: 314,
                duration: 108,
                traffic_speed: 4,
                traffic_state: 1,
                vertexes: [
                  127.37948486268036, 36.35359412322795, 127.38033159890459,
                  36.35359851706841, 127.3819695080121, 36.35358897442774,
                  127.38298350589486, 36.3535761894513,
                ],
              },
              {
                name: '둔산서로',
                distance: 252,
                duration: 51,
                traffic_speed: 30,
                traffic_state: 3,
                vertexes: [
                  127.38298350589486, 36.3535761894513, 127.38297767411672,
                  36.354315182962026, 127.3829957608514, 36.35484701280479,
                  127.38297679588614, 36.355838287801525,
                ],
              },
              {
                name: '둔산북로',
                distance: 90,
                duration: 32,
                traffic_speed: 30,
                traffic_state: 3,
                vertexes: [
                  127.38297679588614, 36.355838287801525, 127.3819739814907,
                  36.35584211794818,
                ],
              },
            ],
            guides: [
              {
                name: '출발지',
                x: 127.37777924062172,
                y: 36.34951161144906,
                distance: 0,
                duration: 0,
                type: 100,
                guidance: '출발지',
                road_index: 0,
              },
              {
                name: '',
                x: 127.3774326598655,
                y: 36.34966301866899,
                distance: 35,
                duration: 5,
                type: 2,
                guidance: '우회전',
                road_index: 1,
              },
              {
                name: '파랑새네거리',
                x: 127.37948486268036,
                y: 36.35359412322795,
                distance: 479,
                duration: 73,
                type: 2,
                guidance: '서대전세무서 시청,시의회 방면으로 우회전',
                road_index: 2,
              },
              {
                name: '서대전세무서네거리',
                x: 127.38298350589486,
                y: 36.3535761894513,
                distance: 314,
                duration: 108,
                type: 1,
                guidance: '대전정부청사 방면으로 좌회전',
                road_index: 3,
              },
              {
                name: '서구청네거리',
                x: 127.38297679588614,
                y: 36.355838287801525,
                distance: 252,
                duration: 51,
                type: 1,
                guidance: '대덕대로 방면으로 좌회전',
                road_index: 4,
              },
              {
                name: '목적지',
                x: 127.3819739814907,
                y: 36.35584211794818,
                distance: 90,
                duration: 32,
                type: 101,
                guidance: '목적지',
                road_index: -1,
              },
            ],
          },
        ],
      },
    ],
  };
  const wayInfo : any[] = wayResult.routes[0].sections[0].roads
    .map((wayNames) => {
      let roadName, roadDistance, roadState, roadStateText, roadDuration;
      if(wayNames.name === ""){
        roadName = "도로";
      } else {
        roadName = wayNames.name;
      }
      switch(wayNames.traffic_state) {
        case 0:
          roadState = '#2DB400';
          roadStateText = '정보없음';
          break;
        case 1:
          roadState = '#C80000';
          roadStateText = '정체';
          break;
        case 2:
          roadState = '#F86F03';
          roadStateText = '지체';
          break;
        case 3:
          roadState = '#FEE500';
          roadStateText = '서행';
          break;
        case 4:
          roadState = '#2DB400';
          roadStateText = '원활';
          break;
        case 6:
          roadState = '#6B6E70';
          roadStateText = '통행 불가';
          break;
        default:
          roadState = '#000000';
          roadStateText = '―';
          break;
      }
      roadDistance = wayNames.distance;
      
      roadDuration = wayNames.duration;
      return {name : roadName, distance: roadDistance, state : roadState, stateText : roadStateText, duration: roadDuration};
    });
  return (
    <div>
      <div className="MyWayListTitle">
        <p>#1 저장된 MyWay 경로 명</p>
        <div>뒤로 가기</div>
      </div>
      <div style={{ height: '195px', backgroundColor: 'beige' }}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '2px'}}>
          <p style={{width: '10%', textAlign: 'center', fontWeight:'bolder'}}>#</p>
            <p style={{width: '50%', textAlign: 'center',  fontWeight:'bolder'}}>길 이름</p>
            <p style={{width: '20%', textAlign: 'center', fontWeight:'bolder'}}>교통 상황</p>
            <p style={{width: '20%', textAlign: 'center', fontWeight:'bolder'}}>소요 시간</p>
        </div>
        {wayInfo.map((way : wayInfo, index : number) => (
          <div key={index} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <p style={{width: '10%', paddingLeft:'10px'}}>#{index + 1}</p>
            <p style={{width: '50%'}}>{way.name}</p>
            <p style={{width: '20%', color : way.state, fontWeight: 'bolder', textAlign: 'center', textShadow: '1px 1px #000'}}>{way.stateText}</p>
            <p style={{width: '20%', textAlign: 'right', paddingRight: '10px'}}>{way.duration}초</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWayDetail;
