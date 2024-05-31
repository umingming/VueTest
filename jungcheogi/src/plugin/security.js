/**
 * 지수: ⁰¹²³⁴⁵⁶⁷⁸⁹
 * 로그: ₀₁₂₃₄₅₆₇₈₉
 * 특수문자: Θ
 */
export const QUESTIONS = [
    //============================== 2019
    {
        ANSWER: "전치, 순서, 치환",
        TITLE: "고대 암호",
        QUESTION:
            "- ㅇㅇ법: 평문에 있는 문자들의 ㅇㅇ를 바꿈으로써 암호화하는 기법 \r\n - ㅇㅇ법: 평문의 문자들을 다른 문자로 치환함으로써 암호화하는 기법",
        ITERATION: 2019,
        NO: 40,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "전치, 치환, 치환",
        TITLE: "고대 암호",
        QUESTION:
            "- 스파르타의 봉 암호: (전치/치환)법 \r\n - 시저 암호: (전치/치환)법 \r\n - 시프트 암호: 알파벳에 대해 26가지 서로 다른 키가 존재하는 (전치/치환)법",
        ITERATION: 2019,
        NO: 40,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "같은, 빠름, 블록, 스트림",
        TITLE: "대칭키 암호",
        QUESTION:
            "- 암호화와 복호화에 (같은/다른) 키를 사용하는 방식 \r\n - 공개키 암호에 비해 속도가 (빠름/느림).\r\n - ㅇㅇ 암호와 평문과 키를 비트 단위로 XOR하여 암호문을 얻는 ㅇㅇㅇ 암호로 나뉨.",
        ITERATION: 2019,
        NO: 41,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "다른, 누구나, 암호, 본인만, 복호",
        TITLE: "공개키 암호",
        QUESTION:
            "- 암호화와 복호화에 (같은/다른) 키를 사용하는 방식 \r\n - 공개키: (본인만/누구나) 공개키를 이용하여 (암호/복호)화 가능 \r\n - 개인키: (본인만/누구나) 공개키를 이용하여 (암호/복호)화 가능",
        ITERATION: 2019,
        NO: 41,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "랜섬웨어",
        TITLE: "ㅇㅇㅇㅇ",
        QUESTION:
            "사용자의 문서 파일 등을 암호화한 후 암호를 풀기 위해서는 비트코인 등을 송금하도록 유도하는 악성코드",
        ITERATION: 2019,
        NO: 45,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "스푸핑",
        TITLE: "ㅇㅇㅇ",
        QUESTION:
            "피해 호스트가 신뢰하는 호스트로 가정하여 정보를 수집하거나 가로채는 방식의 공격",
        ITERATION: 2019,
        NO: 46,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "분산",
        TITLE: "ㅇㅇ 서비스 공격",
        QUESTION:
            "여러 대의 공격자를 분산적으로 배치해 동시에 대량의 데이터를 전송하여 \r\n  특정 서비스나 자원의 가용성을 떨어트리는 결과를 초래하는 유형의 공격",
        ITERATION: 2019,
        NO: 47,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "사전",
        TITLE: "ㅇㅇ 공격",
        QUESTION:
            "ID와 패스워드가 될 가능성이 있는 단어를 미리 모아두고 이 단어를 대입하며 계정을 크랙하는 공격",
        ITERATION: 2019,
        NO: 48,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "시그니처, 통계적, X",
        TITLE: "침입탐지 시스템(IDS)",
        QUESTION:
            "- ㅇㅇㅇㅇ 분석: 알려진 공격에 대한 패턴을 활용하여 침입을 탐지. 알려지지 않은 공격은 대처 불가 \r\n - ㅇㅇㅇ 분석: 정상적인 행위 패턴으로부터 편차를 찾아 판정. 잘못된 경고 신호를 보낼 가능성 높음. \r\n - 무결성 분석: 실시간 대응에 도움 (O/X)",
        ITERATION: 2019,
        NO: 50,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "클리어, 암호, 암호",
        TITLE: "S/MIME 메시지 구성",
        QUESTION:
            "- 서명된 데이터: 콘텐트와 전자서명을 base64로 부호화 \r\n- ㅇㅇㅇ 서명 데이터: 전자서명만 base64로 부호화 \r\n- 서명 및 봉인된 데이터: ㅇㅇ화된 데이터는 서명될 수 있고 서명된 데이터나 클리어 서명 데이터는 ㅇㅇ화될 수 있음.",
        ITERATION: 2019,
        NO: 54,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: 3,
        TITLE: "웹 보안",
        QUESTION:
            "URL에 사용자 ID를 포함하도록 웹 서비스를 구성한 경우 이를 통한 공격을 일컫는 위협 요소?\r\n1) SQL Injection\r\n2) 크로스 사이트 스크립팅(XSS)\r\n3) 접근제어 실패\r\n4) 웹 클라이언트 공격",
        ITERATION: 2019,
        NO: 56,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },

    //============================== 2018
    {
        ANSWER: "무결",
        TITLE: "정보보호의 목표",
        QUESTION:
            "ㅇㅇ성: 허락되지 않은 자가 정보를 함부로 수정할 수 없도록 하는 것",
        ITERATION: 2018,
        NO: 37,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "웜, 트로이, 스캐닝",
        TITLE: "악성코드",
        QUESTION:
            "- (바이러스/웜): 네트워크를 통해 스스로 감염되며 숙주가 필요 없음.\r\n- ㅇㅇㅇ 목마: 정상적인 기능을 하는 프로그램으로 가장하여 프로그램 내에 숨어 의도하지 않은 기능을 수행\r\n- ㅇㅇㅇ : 공격대상 호스트들이나 네트워크에 대한 취약점을 발견하기 위한 사전 정보수집 활동",
        ITERATION: 2018,
        NO: 43,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "정보, 권한, 공격, 재침입",
        TITLE: "서버의 침입 및 정보유출 단계",
        QUESTION:
            "ㅇㅇ 획득 단계 -> ㅇㅇ 획득 단계 -> ㅇㅇ 단계 -> ㅇㅇㅇ 단계",
        ITERATION: 2018,
        NO: 46,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "시스템, 관리자, 침입, 백도어, 유출, 비권한",
        TITLE: "서버의 침입 및 정보유출 단계",
        QUESTION:
            "- 정보 획득 단계: 공격 대상 ㅇㅇㅇ 결정 \r\n- 권한 획득 단계: 일반 사용자와 ㅇㅇㅇ 권한 획득 \r\n- 공격 단계: ㅇㅇ 흔적 지우고 ㅇㅇㅇ 설치 \r\n- 재침입 단계: 다른 시스템 공격, 정보 변경 또는 ㅇㅇ, 다른 ㅇㅇㅇ 행위 수행",
        ITERATION: 2018,
        NO: 46,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: 3,
        TITLE: "정보 유출 공격",
        QUESTION:
            "사람을 속여서 민감한 정보를 유츨하게 하는 공격은?\r\n1) 버퍼 오버플로 공격\r\n2) 사전 공격\r\n3) 사회공학적인 공격\r\n4) 레이스 컨디션 공격",
        ITERATION: 2018,
        NO: 47,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: 3,
        TITLE: "방화벽 구성 방식",
        QUESTION:
            "강력한 로그인, 감시 기능이 있으며 프락시 서버를 활용하여 확장성이 우수하지만 속도가 빠르지 않은 방화벽의 구성 방식은?\r\n1) 패킷 필터링\r\n2) 서킷 게이트웨이\r\n3) 애플리케이션 게이트웨이\r\n4) 하이브리드 방식",
        ITERATION: 2018,
        NO: 48,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "공중, 사설",
        TITLE: "가상사설망(VPN)",
        QUESTION:
            "(공중/사설)망을 이용하여 (공중/사설)망처럼 직접 운용 관리하는 것",
        ITERATION: 2018,
        NO: 51,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "인증, 기밀성, 압축, 이메일",
        TITLE: "PGP 보안 서비스와 알고리즘",
        QUESTION:
            "- ㅇㅇ: SHA와 DSA 또는 RSA의 결합 \r\n - ㅇㅇㅇ: 메시지 암호화를 위해 TDEA, AES, IDEA 사용 \r\n - ㅇㅇ: ZIP 사용\r\n - ㅇㅇㅇ 호환성: 기수 64 변환",
        ITERATION: 2018,
        NO: 52,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "증거, 포장, 분석, 검토, 보고서",
        TITLE: "디지털 포렌식 수행 과정",
        QUESTION:
            "사전 준비 -> ㅇㅇ 수집 -> ㅇㅇ 및 이송 -> 조사 ㅇㅇ -> 정밀 ㅇㅇ -> ㅇㅇㅇ 작성",
        ITERATION: 2018,
        NO: 58,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },

    //============================== 2017
    {
        ANSWER: "해시 함수, 블록 암호",
        TITLE: "메시지 인증 알고리즘",
        QUESTION:
            "- HMAC: ㅇㅇ ㅇㅇ에 기반을 둠.\r\n - CMAC: ㅇㅇ ㅇㅇ에 기반을 둠.",
        ITERATION: 2017,
        NO: 42,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "스니핑",
        TITLE: "사이버 공격",
        QUESTION:
            "- ㅇㅇㅇ: 네트워크상의 데이터를 도청하는 행위를 일컫는 사이버 공격 방식",
        ITERATION: 2017,
        NO: 46,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "수동, 접속, 능동, 무결",
        TITLE: "네트워크 보안",
        QUESTION:
            "- ㅇㅇ적 공격: 통신회선상의 정보를 무단으로 취득하는 행위로, 방어를 위해 제3자의 ㅇㅇ시도를 방지함.\r\n - ㅇㅇ적 공격: 통신회선상의 정보를 변조 및 위조하는 행위로 수신 측에서 데이터에 대한 ㅇㅇ성을 확인해 방어함.",
        ITERATION: 2017,
        NO: 48,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: 4,
        TITLE: "보안시스템",
        QUESTION:
            "침입차단 시스템의 구축 형태 중 중립적인 네트워크인 비무장지대(DMZ)를 구축하는 것은?\r\n1) 스크리닝 라우터\r\n2) 베스천 호스트\r\n3) 스크린 호스트 게이트웨이\r\n4) 스크린 서브넷 게이트웨이",
        ITERATION: 2017,
        NO: 51,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "전자서명, 세션, 해시함수, 암호",
        TITLE: "S/MIME 알고리즘",
        QUESTION:
            "- ㅇㅇㅇㅇ: RSA와 ECDSA 사용\r\n- ㅇㅇ키 분배: RSA와 ECDH 사용\r\n- ㅇㅇㅇㅇ: SHA 사용\r\n- 메시지 ㅇㅇ화: AES사용",
        ITERATION: 2017,
        NO: 55,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: 1,
        TITLE: "보안시스템",
        QUESTION:
            "무선 LAN 환경에서 기밀성을 제공하기 위한 알고리즘이지만 현재는 취약성이 드러나 사용하지 않는 것은?\r\n1) WEP\r\n2) RSN\r\n3) EAP\r\n4) WPA2",
        ITERATION: 2017,
        NO: 58,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },

    //============================== 2016
    {
        ANSWER: "바이러스",
        TITLE: "악성코드",
        QUESTION:
            "시스템이나 사용자의 파일에 자신을 복제하고 그 컴퓨터 시스템 내에서 증식하거나 시스템을 파괴하는 것은?",
        ITERATION: 2016,
        NO: 37,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "TLS",
        TITLE: "ㅇㅇㅇ",
        QUESTION:
            "SSL 3.0을 기반으로 한 업그레이드 프로토콜로 트랜스포트 계층에 적용하는 보안 프로토콜",
        ITERATION: 2016,
        NO: 43,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "서명, 압축, 암호, 64",
        TITLE: "PGP 송신측 전송 과정",
        QUESTION:
            "해시코드를 사용하여 ㅇㅇ을 생성 -> ㅇㅇ -> ㅇㅇ화 -> 기수 ㅇㅇ 형식으로 변환",
        ITERATION: 2016,
        NO: 44,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "이진, 복호, 압축, 비교",
        TITLE: "PGP 수신측 전송 과정",
        QUESTION:
            "ㅇㅇ 형식으로 변환 -> ㅇㅇ화 -> ㅇㅇ 해제 -> 서명으로부터 복구한 해시코드를 자신이 계산한 해시코드와 ㅇㅇ",
        ITERATION: 2016,
        NO: 44,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: 3,
        TITLE: "보안 시스템",
        QUESTION:
            "허가받지 않은 접근이나 해킹 시도를 감지하여 자동으로 대응 작업을 수행하여 행위를 중지시키는 시스템은?\r\n1) 침입탐지 시스템(IDS)\r\n2) 침입차단 시스템(Firewall)\r\n3) 침입방지 시스템(IPS)\r\n4) 가상사설망(VPN)",
        ITERATION: 2016,
        NO: 51,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: "무결성",
        TITLE: "ㅇㅇㅇ 분석",
        QUESTION:
            "- 파일이나 객체의 어떤 측면이 변경되었는지 초점\r\n- 해시 알고리즘 같은 강력한 암호 매커니즘 사용",
        ITERATION: 2016,
        NO: 53,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
    {
        ANSWER: 1,
        TITLE: "VPN",
        QUESTION:
            "공중망을 통하여 기업과 전략적인 업무파트너 기업 사이만 연결한 VPN은?\r\n1) 익스트라넷 VPN\r\n2) 원격접속 VPN\r\n3) 인트라넷 VPN\r\n4) 복합형 VPN",
        ITERATION: 2016,
        NO: 57,
        IS_CORRECT: false,
        IS_ENTERED: false,
        SUBJECT: "보안",
    },
];
