# team3-web
[▶️ 동일 프로젝트의 server repository](https://github.com/wafflestudio20-5/team3-server)
# 🧇 Waffle-Market

## 🥕 당근마켓 클론 코딩, 와플마켓 Client

- 당근마켓 기능을 클론 코딩한 와플마켓 client입니다.
- 단순 게시판 기능 외에 예약, 거래, 채팅 등의 부가 기능이 더해진 서비스를 구현해보면서 구성원들의 개발 실력 성장을 이루고자 했고,
  서비스 기획에 인풋을 줄이기 위해 기존에 있는 서비스를 기반으로 클론 코딩을 하였습니다.

<br>

## 😎 서비스 소개 영상 및 사진
### 💌 [서비스 소개 영상](https://www.youtube.com/watch?v=MHO3Fofvu3A)

![A1 (300 DPI)](https://user-images.githubusercontent.com/72662822/216532231-59aa7003-b65b-4d4e-b122-8165b24ed710.png)


<br>

## 👨‍👩‍👧‍👦 누가 만들었나요?

|                                                   [김예지(lerrybe)](https://github.com/lerrybe)                                                    |                                                  [백민홍(roddywhite)](https://github.com/roddywhite)                                                   |                                                  [유창민(fluentmin)](https://github.com/fluentmin)                                                   |
| :------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| <a href="https://github.com/lerrybe"><img src="https://avatars.githubusercontent.com/u/71599639?v=4" width="160px" style='border-radius: 50%'></a> | <a href="https://github.com/roddywhite"><img src="https://avatars.githubusercontent.com/u/109863663?v=4" width="160px" style='border-radius: 50%'></a> | <a href="https://github.com/fluentmin"><img src="https://avatars.githubusercontent.com/u/91964707?v=4" width="160px" style='border-radius: 50%'></a> |

<br>

## 🏛️ 클라이언트 및 서버 구조
![image](https://github.com/lerrybe/waffle-market/assets/71599639/8aeed47a-b68e-4771-ade7-cfbec9496929)

<br>

## 📚 기술 스택

<div align=center>
    <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=black">
    <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=black">
    <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black">
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <br>
    <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
    <img src="https://img.shields.io/badge/Redux_toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
    <br>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
    <img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
    <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
    <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">
    <img src="https://img.shields.io/badge/amazon aws-232F3E?style=for-the-badge&logo=amazon aws&logoColor=white">
</div>

<br>

## 🧑‍💻Convention

- 프로젝트를 시작하기 전 아래와 같은 컨벤션을 정함으로써 코드 관리에 효율성을 높였습니다.


### 👔 Code Convention

- 팀원 간 코드 스타일을 맞추고 가독성을 높여 코드 리뷰를 원할하게 하기 위해 [eslint와 Prettier](https://pravusid.kr/typescript/2020/07/19/typescript-eslint-prettier.html)를 사용하였습니다.
- [husky](https://jbee.io/web/formatting-code-automatically/)를 통해, 커밋 전 코드 포맷팅을 자동화함으로써 개발 효율을 높이고자 하였습니다.
- Github Action 을 이용하여 main 브랜치에 PR 올릴때마다 자동으로 스타일 검사를 하도록 설정하였습니다.

### 😎 Commit Convention

- 아래와 같은 커밋 컨벤션을 통해 서로의 작업물이 어떤 유형의 것인지 파악하기 쉽도록 하였습니다.
  <img width="600" alt="스크린샷 2023-02-01 오후 11 26 44" src="https://user-images.githubusercontent.com/72662822/216070103-f68194a6-0ecb-4539-912b-f47107b4f500.png">

### ⛙ Git Branch 전략 및 Merge 전략

<img width="759" alt="스크린샷 2023-02-01 오후 11 43 46" src="https://user-images.githubusercontent.com/72662822/216074373-cc670c46-8f34-44c6-b153-06221d125330.png">

- Github-flow를 사용했습니다.
  - 크지 않은 사이즈의 토이프로젝트였기 때문에 간단한 Branching 전략인 Github-flow를 사용했습니다.
  - 각자의 작업물은 feature 브랜치를 만들어 관리했으며, 완성한 작업물은 main 브랜치에 Squash Merge 전략을 사용해 합쳤습니다.
- 아래와 같은 근거로 Merge 전략은 Squash Merge 전략을 택했습니다.
  - 각자 작업한 결과물의 완성본이 main 브랜치의 관심사였던 점
  - PR을 날리는 단위를 작게 하자고 미리 협의한 점
  - 각자 작업물의 히스토리는 main 브랜치에 남기기보다는 로컬에 남겨 관리하는 것이 편하겠다고 판단한 점

<br>

## 📖 기술적인 이슈 및 개발 과정을 겪으며 메모한 노트

[1. 기술 스택 선정 이유](https://garrulous-philosophy-1a3.notion.site/edfa4283e81d49bea043d09b1c847cb8?pvs=4)

[2. 백엔드와 프론트엔드의 병렬적 개발 상황에서의 해결방안, msw](https://garrulous-philosophy-1a3.notion.site/msw-1427d377884e481885ac7a622b65c4d2?pvs=4)

[3. 토큰 관리하기](https://garrulous-philosophy-1a3.notion.site/7dd829f0b28a4d27a04c7af6954079d7?pvs=4)

[4. 채팅 기능 구현하기](https://garrulous-philosophy-1a3.notion.site/e6a282bc110345d9880e3a9052875fb2?pvs=4)

[5. 랜딩 페이지 성능 개선하기](https://garrulous-philosophy-1a3.notion.site/2c429bd091ed4dd391f1439a24b89cfe?pvs=4)

[6. 소셜 로그인 및 회원가입](https://garrulous-philosophy-1a3.notion.site/7b408f1987714b7d93c4f60028809635?pvs=4)

[7. 소셜 로그인에서 프론트엔드와 백엔드의 역할 분담](https://garrulous-philosophy-1a3.notion.site/da2accb53e624110ad73b29b7ec6c7d3?pvs=4)

[8. 페이지별 접근제어 설정 로직 통일화](https://garrulous-philosophy-1a3.notion.site/eb965a8bc29d4668b64b8022052caa3b?pvs=4)

[9. 크로스 브라우징 이슈](https://garrulous-philosophy-1a3.notion.site/b81f0d4848794dfe8d5737f384ffacdd?pvs=4)

[10. 프론트엔드 협업 작업 방식](https://garrulous-philosophy-1a3.notion.site/0252d837c94a4792aed46b6da14a3648?pvs=4)

[11. 위치정보 api 사용기](https://garrulous-philosophy-1a3.notion.site/api-b1cc72ae3dc3469fb75143a06d7bf82c?pvs=4)

[12. CI / CD, github actions, aws s3 cloudfront](https://garrulous-philosophy-1a3.notion.site/CI-CD-github-actions-aws-s3-cloudfront-ad20a0142e7b4444a472930113764a10?pvs=4)

[13. 반응형 UI](https://garrulous-philosophy-1a3.notion.site/UI-93a98f31dd614e20b1bc013802fa5ddd?pvs=4)

<br>
<br>

## 🎉 각자 소감 및 서로에게..

```
민홍
사실 저희가 이것저것 구현해야 할 페이지, 기능들이 많아서 다 꼼꼼하게 신경쓰는 것이 쉽지 않을거라고 생각했는데
정말 실제 서비스 오픈하는 것처럼 빈틈 없는 결과물을 내려고 다들 열을 올리는 모습이 너무 멋있었고 ‘뭘 해도 될 사람들’이라고 생각했네요..
예지님.. 뼈대를 너무 잘 잡아주셔서 편하게 코드 짰네요.. 창민님.. 몸이 두 개인 것처럼 살아주셔서 감사해요..
백엔드 분들께도 너무 감사한게 정말 빠르게 빈틈없이 작업해주셔서 작업하기 너무 수월했습니다..
다혜님도 합류 전과 후 퀄리티가 확 차이나는걸 보고 상당한 존재감을 느꼈습니다..
너무 많이 배우고 좋은 에너지를 얻어서 기분이 좋습니다…!!!
```

```
창민
🙇‍♂️먼저 팀원분들께 절 한 번 하고 시작하겠습니다🙇‍♂️
인턴하며 토이플젝을 하다보니 팀원분들, 특히 FE 예지님과 민홍님으로부터 정말 많은 도움 받았습니다.. 감사합니다ㅠㅠㅠ
백엔드 분들 및 디자이너 다혜님께도 엄청 많은 도움 받았어요,, 회원가입 페이지 디자인 비포애프터 사진을 첨부하고 싶은데 부끄러워서 못 하겠습니다ㅋㅋㅋ
그동안은 혼자 코딩을 해왔다보니 개발 과정에서 다른 사람들과의 협업을 경험해본 것이 처음이었는데, 협업의 순기능을 몸소 체험할 수 있었습니다.
플젝을 하는 도중 함께 일하는 건 컴퓨터 화면 너머의 사람들이라는 걸 느끼는 순간이 꽤 많았고,
칭찬을 여러번 했는데도 부족할 만큼 대단한 팀원분들 만나서 정말 감사하게 생각합니다..! 플젝 끝나고 나면 조금 허전할 것 같네요..
```

```
예지
벌써 한 달이 지나다니 믿을 수 없어요 땃쉬..
사실 서비스 하나를 통으로 구현해본다는 게 쉬워보이진 않았어서, 처음에는 정말 많이 걱정했는데 협업은 진짜 놀라운 것인 것 같아요..!
혼자서는 절대 못해낼 양 이었는데 머리 맞대고 같이 고민하다보니까 하나하나 만들어지더라고요.
사실 아직도 부족한게 많지만 쉽게 얻지못할 정말 값진 경험 많이 했다고 생각합니다.
일단 '어.. 해볼게요'하더니 얼마 안지나서 다 해버리는 뚝딱좌 민홍님,
살인적인 스케줄에도 저걸 해낸다고..?싶은 헤르미온느 창민님, 우리 서비스를 180도 달라지게 해준 최고다혜님,
그리고 폭발적인 개발속도로 API 걱정은 한 번도 하지 않게 해주신 3팀 백엔드 분들 정말 너무 감사합니다!
이번 협업에서 좋은 에너지 받아서 너무 행복합니다. 앞으로도 화이팅!!!
```
