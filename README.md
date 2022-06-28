# Module

Front 연결 설성
app_config.js
localhost:8080으로 시작 하는 주소를  연결 시켜 주는 역활 -도메인이 바뀔때를 대비  


AppService.js 
add , delete, put 등과 같은 메서드들을 통합 (유틸리티 함수)

![image](https://user-images.githubusercontent.com/42922673/176191654-34193e22-adbe-49fa-849f-4026f96b198b.png)
와같이 AppService.js 의 call 함수를 통해 메서드들을 실행 시킬수 있음



Back  연결 설정
프론트와 연결시 cors 문제 해결  - WebMvcConfigurer 사용 

![image](https://user-images.githubusercontent.com/42922673/176192110-a34cfa40-1dcf-4880-8f7c-1a416a0845ec.png)


   를 통해 허용 메서드 및 헤더 지정
   
   **헤더 "Access-Control-Allow-origin"을 통해 cors 문제 해결 
   
    
    
