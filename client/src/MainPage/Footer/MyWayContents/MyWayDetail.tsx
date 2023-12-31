import React, { useContext } from 'react';
import { NaviContext } from '../../../util/MapContext';
import '../MyWayCSS.css';

// 페이지 작업용 검색 결과 json 값 추가.
interface wayInfo {
  name: string;
  distance: number;
  state: string;
  stateText: string;
  duration: string;
}

const MyWayDetail: React.FC = ({
}) => {
  const {naviDataResult} = useContext(NaviContext)
  // 길찾기 API 응답 결과값을 저장하는 상수. Props로 상속할시, WayResult에 추가할 것.
  const wayResult: any = naviDataResult; // 샘플 값을 적용한 상수.
  // fetch로 받아온 길찾기 API 결과값에서 모든 roads의 값을 꺼내 저장할 배열. 데이터 타입이 string, number, number[]가 복합적으로 들어가기에 any[]타입으로 명시.
  const mergeRoads: any[] = [];
  // 모든 roads의 값을 꺼내 mergeRoads에 push한다.
  wayResult.routes.forEach((route: any) => {
    route.sections.forEach((section: any) => {
      mergeRoads.push(...section.roads);
    });
  });

  // 만약 fetch로 요청 결과 JSON을 상속받았을 경우, wayResult에 할당하여 적용하면 된다.
  const wayInfo: any[] = mergeRoads.map((wayNames) => {
    let roadName, roadDistance, roadState, roadStateText, roadDuration;
    if (wayNames.name === '') {
      roadName = '도로';
    } else {
      roadName = wayNames.name;
    }
    switch (wayNames.traffic_state) {
      case 0:
        roadState = '#2DB400';
        roadStateText = '원활';
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

    // 시간 계산 기능.
    const timeSum: number = wayNames.duration;
    let hour: number = 0;
    let minutes: number = 0;
    let seconds: number = 0;
    // 분 계산
    if (Math.floor(timeSum / 60) > 60) {
      hour = Math.floor(Math.floor(timeSum / 60) / 60);
      minutes = Math.floor(timeSum / 60) % 60;
    } else {
      minutes = Math.floor(timeSum / 60);
    }
    // 초 계산
    seconds = timeSum % 60;
    // 계산된 시간을 string으로 저장
    roadDuration =
      (hour !== 0 ? `${hour}시간` : '') +
      ' ' +
      (minutes !== 0 ? `${minutes}분` : '') +
      ' ' +
      (seconds !== 0 ? `${seconds}초` : '');
    return {
      name: roadName,
      distance: roadDistance,
      state: roadState,
      stateText: roadStateText,
      duration: roadDuration,
    };
  });

  return (
    <div>
      <div className="myway-contentsbox">
        <div className="myway-detail-contentsbox-title flex-row justify-center align-center">
          <p className="myway-detail-contentsbox-title-index myway-title-text">
            #
          </p>
          <p className="myway-detail-contentsbox-title-wayname myway-title-text">
            길 이름
          </p>
          <p className="myway-detail-contentsbox-title-traffic myway-title-text">
            교통 상황
          </p>
          <p className="myway-detail-contentsbox-title-duration myway-title-text">
            소요 시간
          </p>
        </div>
        {wayInfo.map((way: wayInfo, index: number) => (
          <div
            key={index}
            className="flex-row justify-space-between align-center"
          >
            <p className="myway-detail-contentsbox-contents-index">
              #{index + 1}
            </p>
            <p className="myway-detail-contentsbox-contents-wayname">
              {way.name}
            </p>
            <p
              className="myway-detail-contentsbox-contents-traffic myway-title-text"
              style={{
                backgroundColor: way.state,
              }}
            >
              {way.stateText}
            </p>
            <p className="myway-detail-contentsbox-contents-duration">
              {way.duration}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWayDetail;
