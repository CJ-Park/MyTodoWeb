# Login + Todo 
## React Todo + Server Code 추가 완료
## 주석 추가 완료

### DB - MongoDB 사용
- MongoDB 설치 필요

### Server 환경변수 설정
- server 폴더 바로 하위에 .env 파일 생성
- mongodb 설치 후 server쪽 .env에 DB_URL=mongodb://localhost:27017 적용해야 DB 동작함 
- CLIENT_URL=http://localhost:<Client포트번호> 작성 필요
- COOKIE_SECRET=<랜덤값> 작성 필요

### Client 환경변수 설정
- client 폴더 바로 하위에 .env 파일 생성
- REACT_APP_API_KEY=<날씨 API key 값 필요>
- REACT_APP_SERVER_URL=http://localhost:<Server 포트번호> 작성 필요
