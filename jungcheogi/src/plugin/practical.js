[
    {
        questionNumber: 1,
        question:
            "다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
        code: "class Main { public static void main(String[] args) { int[] a = new int[]{1, 2, 3, 4}; int[] b = new int[]{1, 2, 3, 4}; int[] c = new int[]{1, 2, 3}; check(a, b); check(a, c); check(b, c); } public static void check(int[] a, int[] b) { if (a == b) { System.out.print('O'); } else { System.out.print('N'); } } }",
        answer: "NNN",
    },
    {
        questionNumber: 2,
        question: "다음 문제에서 설명하는 용어를 작성하시오.",
        description:
            "데이터를 중복시켜 성능을 향상시키기 위한 기법으로 데이터를 중복 저장하거나 테이블을 합치는 등으로 성능을 향상시키지만 데이터 무결성이 저하될 수 있는 기법",
        answer: "반정규화",
    },
    {
        questionNumber: 3,
        question:
            "다음은 SQL에 관한 문제이다. 아래 SQL 구문의 빈칸을 작성하시오.",
        table: "사원 [사원번호(PK), 이름, 나이, 부서], 부서 [사원번호(PK), 이름, 주소, 나이]",
        sql: [
            "INSERT INTO 사원 (사원번호, 이름, 주소, 부서) VALUES (32431, '정실기', '서울', '영업');",
            "INSERT INTO 부서 (사원번호, 이름, 나이, 부서) SELECT 사원번호, 이름, 나이, 23 FROM 사원 WHERE 이름 = '정실기';",
            "SELECT * FROM 사원;",
            "UPDATE 사원 SET 부서 = '퇴사' WHERE 사원번호 = 32431;",
        ],
    },
    {
        questionNumber: 4,
        question: "다음 릴레이션의 Cardinality와 Degree를 작성하시오.",
        relation: {
            Cardinality: "5",
            Degree: "4",
        },
    },
    {
        questionNumber: 5,
        question:
            "다음은 프로토콜에 대한 내용이다. 아래 내용을 읽고 알맞는 답을 작성하시오.",
        description:
            "- Network layer에서 IP패킷을 암호화하고 인증하는 등의 보안을 위한 표준이다. - 기업에서 사설 인터넷망으로 사용할 수 있는 VPN을 구현하는데 사용되는 프로토콜이다. - AH(Authentication Header)와 ESP(Encapsulating Security Payload)라는 두 가지 보안 프로토콜을 사용한다.",
        answer: "IPSec",
    },
    {
        questionNumber: 6,
        question:
            "다음은 Python에 대한 문제이다. 아래 코드를 읽고 알맞는 출력 값을 작성하시오.",
        code: "def fnCalculation(x, y): result = 0; for i in range(len(x)): temp = x[i:i+len(y)] if temp == y: result += 1 return result a = 'abdcabcabca' p1 = 'ab'; p2 = 'ca'; out = f'ab{fnCalculation(a, p1)}ca{fnCalculation(a, p2)}' print(out)",
        answer: "ab3ca3",
    },
    {
        questionNumber: 7,
        question: "아래 설명하는 내용을 확인하여 알맞는 알고리즘을 작성하시오.",
        description:
            "- 대칭키 알고리즘으로 1997년 NIST에서 DES를 대체하기 위해 생성되었다. - 128비트, 192비트 또는 256비트의 가변 키 크기와 128비트의 고정 블록 크기를 사용한다. - 높은 안전성과 효율성으로 인해 DES 대신 전 세계적으로 많이 사용되고 있다.",
        answer: "AES",
    },
    {
        questionNumber: 8,
        question:
            "패킷 교환 방식 중에 연결형과 비연결형에 해당하는 방식을 작성하시오.",
        description: "① 연결형 교환 방식 ② 비연결형 교환 방식",
        answer: {
            1: "가상회선",
            2: "데이터그램",
        },
    },
    {
        questionNumber: 9,
        question: "아래 내용을 확인하고 보기에서 알맞는 답을 고르시오.",
        description:
            "실행 순서가 밀접한 관계를 갖는 기능을 모아 모듈로 구성한다. 한 모듈 내부의 한 기능 요소에 의한 출력 자료가 다음 기능 원소의 입력 자료로서 제공되는 형태이다.",
        answer: "순차적",
    },
    {
        questionNumber: 10,
        question:
            "아래는 디자인 패턴에 관한 설명이다. 아래 설명을 읽고 보기에서 알맞는 용어를 작성하시오.",
        description:
            "- 컬렉션 객체의 내부 구조를 노출하지 않고 순차적으로 접근할 수 있게 하는 패턴이다. - 이 패턴은 객체의 내부 표현 방식에 독립적으로 요소에 접근할 수 있도록 해준다. - 반복 프로세스를 캡슐화하여 클라이언트 코드에서는 컬렉션의 구체적인 구현에 종속되지 않도록 한다.",
        answer: "Iterator",
    },
    {
        questionNumber: 11,
        question:
            "아래 그림을 바탕으로 RIP을 구성하여 최단 경로 비용을 계산하여 흐름에 맞게 작성하시오.",
        example: "A → D → C → F",
    },
    {
        questionNumber: 12,
        question:
            "아래의 표를 확인하여 SRT 스케줄링의 평균 대기시간을 계산하여 작성하시오.",
        table: {
            processes: [
                { name: "A", arrival: 0, service: 8 },
                { name: "B", arrival: 1, service: 4 },
                { name: "C", arrival: 2, service: 9 },
                { name: "D", arrival: 3, service: 5 },
            ],
        },
        answer: "6.5",
    },
    {
        questionNumber: 13,
        question:
            "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
        code: '#include <stdio.h> int main() { int arr[3][3] = {1, 2, 3, 4, 5, 6, 7, 8, 9}; int* parr[2] = {arr[1], arr[2]}; printf("%d", parr[1][1] + *(parr[1]+2) + **parr); return 0; }',
        answer: "21",
    },
    {
        questionNumber: 14,
        question:
            "다음은 Java 언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
        code: "class Main { public static void main(String[] args) { int a[] = {1, 2, 3, 4, 5, 6, 7, 8, 9}; ODDNumber OE = new ODDNumber(); System.out.print(OE.sum(a, true) + ', ' + OE.sum(a, false)); } } interface Number { int sum(int[] a, boolean odd); } class ODDNumber implements Number { public int sum(int[] a, boolean odd) { int result = 0; for (int i = 0; i < a.length; i++) { if ((odd && a[i] % 2 != 0) || (!odd && a[i] % 2 == 0)) result += a[i]; } return result; } }",
        answer: "25, 20",
    },
    {
        questionNumber: 15,
        question:
            "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.",
        code: "#include <stdio.h> #include <string.h> void sumFn(char* d, const char* s) { while (*s) { *d = *s; d++; s++; } *d = '\\0'; } int main() { const char* str1 = 'first'; char str2[50] = 'teststring'; int result = 0; sumFn(str2, str1); for (int i = 0; str2[i] != '\\0'; i++) { result += i; } printf('%d', result); return 0; }",
        answer: "10",
    },
    {
        questionNumber: 16,
        question:
            "아래는 소프트웨어 설계에 대한 내용이다. 내용을 읽고 알맞는 답을 작성하시오.",
        description:
            "다른 모듈에 영향을 미치지 않으면서 특정 모듈 내부의 기능을 개선하거나 수정할 수 있는 설계 원리이다. 유지보수와 확장이 용이한 시스템을 설계할 수 있는 특징을 갖는다.",
        answer: "모듈화",
    },
    {
        number: 17,
        language: "Java",
        question:
            "다음은 Java에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력 값을 작성하시오.",
        code: 'class Main { public static void main(String[] args) { String str = "abacabcd"; boolean[] seen = new boolean[256]; System.out.print(calculFn(str, str.length() - 1, seen)); } public static String calculFn(String str, int index, boolean[] seen) { if (index < 0) return ""; char c = str.charAt(index); String result = calculFn(str, index - 1, seen); if (!seen[c]) { seen[c] = true; return c + result; } return result; } }',
        output: "dcba",
    },
    {
        number: 18,
        language: "C",
        question:
            "다음은 C언어에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력 값을 작성하시오.",
        code: '#include <stdio.h> void swap(int a, int b) { int t = a; a = b; b = t; } int main() { int a = 11; int b = 19; swap(a, b); switch(a) { case 1: b += 1; case 11: b += 2; default: b += 3; break; } printf("%d", a - b); }',
        output: "-10",
    },
    {
        number: 19,
        language: "C",
        question:
            "다음은 C언어의 구조체에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력 값을 작성하시오.",
        code: '#include <stdio.h> struct node { int n1; struct node *n2; }; int main() { struct node a = {10, NULL}; struct node b = {20, NULL}; struct node c = {30, NULL}; struct node *head = &a; a.n2 = &b; b.n2 = &c; printf("%d\\n", head->n2->n1); return 0; }',
        output: "20",
    },
];
