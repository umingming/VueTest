(()=>{"use strict";var E={9799:(E,T,I)=>{I(3792),I(3362),I(9085),I(9391);var n=I(5130),R=I(6768),S=I(4232),N={class:"subject-group"},O=["onClick"],r=["onClick"],C={id:"question-mark"},A={class:"question-box"},_={id:"serial"},U={class:"answer-box"},e={key:0,class:"info-box"},t={key:0},o={key:1},l={key:1,class:"success"};function u(E,T,I,u,L,D){return(0,R.uX)(),(0,R.CE)(R.FK,null,[(0,R.Lk)("div",N,[((0,R.uX)(),(0,R.CE)(R.FK,null,(0,R.pI)(7,(function(E){return(0,R.Lk)("button",{key:E,class:(0,S.C4)({on:u.selectedSubject===E}),onClick:function(T){return u.selectSubject(E)}},(0,S.v_)(E),11,O)})),64)),((0,R.uX)(!0),(0,R.CE)(R.FK,null,(0,R.pI)(u.subjects,(function(E){return(0,R.uX)(),(0,R.CE)("button",{key:E,class:(0,S.C4)({on:u.selectedSubject===E}),onClick:function(T){return u.selectSubject(E)}},(0,S.v_)(E),11,r)})),128))]),u.currentQuestion?((0,R.uX)(),(0,R.CE)("div",{key:0,class:(0,S.C4)({correct:u.currentQuestion.IS_CORRECT})},[(0,R.Lk)("span",C,[(0,R.eW)((0,S.v_)(u.questionMark)+" ",1),(0,R.Lk)("button",{onClick:T[0]||(T[0]=function(){return u.shuffleQuestionList&&u.shuffleQuestionList.apply(u,arguments)})},"Shuffle")]),(0,R.Lk)("div",A,[(0,R.Lk)("span",null,"[ "+(0,S.v_)(u.currentQuestion.TITLE)+" ]",1),(0,R.eW)(" "+(0,S.v_)(u.currentQuestion.QUESTION),1)]),(0,R.Lk)("span",_,(0,S.v_)(u.currentQuestion.ITERATION)+", "+(0,S.v_)(u.currentQuestion.NO),1),(0,R.Lk)("div",U,[(0,R.Lk)("input",{ref:"answerRef",onKeyup:T[1]||(T[1]=(0,n.jR)((function(){return u.checkAnswer&&u.checkAnswer.apply(u,arguments)}),["enter"]))},null,544),u.isAnswerEntered?((0,R.uX)(),(0,R.CE)("button",{key:1,onClick:T[3]||(T[3]=function(){return u.passAnswer&&u.passAnswer.apply(u,arguments)})},"Next")):((0,R.uX)(),(0,R.CE)("button",{key:0,onClick:T[2]||(T[2]=function(){return u.checkAnswer&&u.checkAnswer.apply(u,arguments)})},"Enter"))]),u.isAnswerEntered?((0,R.uX)(),(0,R.CE)("div",e,[u.currentQuestion.IS_CORRECT?((0,R.uX)(),(0,R.CE)("div",t,"맞았다! 잘했다!")):((0,R.uX)(),(0,R.CE)("div",o,"틀렸다.")),(0,R.Lk)("div",null,[(0,R.eW)(" 정답: "),(0,R.Lk)("span",null,(0,S.v_)(u.currentQuestion.ANSWER),1)])])):(0,R.Q3)("",!0)],2)):((0,R.uX)(),(0,R.CE)("div",l,(0,S.v_)(u.selectedSubject)+" 과목 완료!🎉",1))],64)}var L=I(8676),D=(I(8706),I(2008),I(113),I(8980),I(4114),I(6910),I(4554),I(6099),I(7495),I(5440),I(144)),W=[{ANSWER:"입출, 명, 유, 유효",TITLE:"알고리즘의 조건",QUESTION:"ㅇㅇ력, ㅇ확성, ㅇ한성, ㅇㅇ성",ITERATION:2019,NO:1,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"이중",TITLE:"연결 리스트",QUESTION:"ㅇㅇ 연결 리스트는 특정 노드에서 선행 노드와 후행 노드에 대한 접근이 모두 가능함.",ITERATION:2019,NO:2,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"경로",TITLE:"그래프 용어",QUESTION:"그래프 G에서 정점 v1으로부터 정점 v2까지의 ㅇㅇ(이)란 간선 (v1, v2),(v1, v2), ..., (vn-1, vn)으로 연결된 \r\n정점의 순서 리스트 v1, v2, ..., vn을 의미함.",ITERATION:2019,NO:3,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:4},{ANSWER:"욕심쟁이, 분할, 동적",TITLE:"알고리즘의 대표적인 설계 기법",QUESTION:"ㅇㅇㅇㅇ 방법, ㅇㅇ정복 방법, ㅇㅇ 프로그래밍 방법",ITERATION:2019,NO:4,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"4",TITLE:"점근 성능",QUESTION:"입력 크기 n에 대한 알고리즘 수행 시간 f(n)=5n³+10n²+8n+200을 점근 성능으로 올바르게 나타낸 것은?\r\n1)O(1)\r\n2)O(n)\r\n3)O(n²)\r\n4)O(n³)",ITERATION:2019,NO:5,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"최악, 3",TITLE:"점화식과 폐쇄형",QUESTION:"퀵 정렬 (최악/최선) 알고리즘의 성능으로 T(1)=Θ(1), T(n)=T(n-1)+Θ(n)의 폐쇄형은?\r\n11)T(n)=Θ(logn)\r\n2)T(n)=Θ(n)\r\n3)T(n)=Θ(n²)\r\n4)T(n)=Θ(nlogn)",ITERATION:2019,NO:6,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"이진, 1",TITLE:"점화식과 폐쇄형",QUESTION:"ㅇㅇ탐색 알고리즘의 성능으로 T(1)=Θ(1), T(n)=T(n/2)+Θ(1)의 폐쇄형은?\r\n1)T(n)=Θ(logn)\r\n2)T(n)=Θ(n)\r\n3)T(n)=Θ(n²)\r\n4)T(n)=Θ(nlogn)",ITERATION:2019,NO:7,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"2",TITLE:"점화식과 폐쇄형",QUESTION:"T(1)=Θ(1), T(n)=T(n/2)+Θ(n)의 폐쇄형은?\r\n1)T(n)=Θ(logn)\r\n2)T(n)=Θ(n)\r\n3)T(n)=Θ(n²)\r\n4)T(n)=Θ(nlogn)",ITERATION:2019,NO:6,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"2",TITLE:"점화식과 폐쇄형",QUESTION:"T(1)=Θ(1), T(n)=2T(n/2)+Θ(1)의 폐쇄형은?\r\n1)T(n)=Θ(logn)\r\n2)T(n)=Θ(n)\r\n3)T(n)=Θ(n²)\r\n4)T(n)=Θ(nlogn)",ITERATION:2019,NO:6,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"최선, 합병, 4",TITLE:"점화식과 폐쇄형",QUESTION:"퀵 정렬 (최선/최악), ㅇㅇ 정렬 알고리즘의 성능으로 T(1)=Θ(1), T(n)=2T(n/2)+Θ(n)의 폐쇄형은?\r\n1)T(n)=Θ(logn)\r\n2)T(n)=Θ(n)\r\n3)T(n)=Θ(n²)\r\n4)T(n)=Θ(nlogn)",ITERATION:2019,NO:6,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"분할, 정복, 결합",TITLE:"분할정복 방법",QUESTION:"분할정복 방법에서 각 순환 호출마다 거치는 작업의 단계: ㅇㅇ -> ㅇㅇ -> ㅇㅇ",ITERATION:2019,NO:6,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"25, 10, 20, 15",TITLE:"퀵 정렬",QUESTION:"다음 데이터에 대해서 분할 함수 Partition()을 한 번 적용한 후 왼쪽 부분배열에 존재하는 데이터를 순서대로 기입하시오.\r\n(단, 피벗은 맨 왼쪽 원소이고, 오름차순으로 정렬한다.)\r\n [30, 45, 20, 15, 40, 25, 35, 10]",ITERATION:2019,NO:6,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"최악, 최악, 최선, 최악, 최선",TITLE:"퀵 정렬의 성능",QUESTION:"- 분할을 수행할 때마다 항상 피벗이 최솟값 또는 최댓값이 되는 경우: (최선/최악)의 성능\r\n- 피벗만 제자리를 잡고 나머지 모든 데이터가 하나의 부분배열이 되는 경우: (최선/최악)의 성능\r\n - 피벗이 항상 중간값이 되는 경우: (최선/최악)의 성능\r\n- 입력 데이터가 정렬되어 있는 경우: (최선/최악)의 성능\r\n- 피벗을 중심으로 항상 동일한 크기의 두 부분배열로 분할되는 경우: (최선/최악)의 성능\r\n",ITERATION:2019,NO:10,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"36",TITLE:"퀵 정렬 피벗",QUESTION:"다음은 입력 크기 38인 배열의 원소를 7개의 그룹으로 구성한 모습이다. 최악 O(n)으로 i번째로 작은 원소를 찾기 위한 선택 문제에서 피벗으로 선택되는 원소는? \r\n[9, 6, 35, 39, 15]\r\n[24, 70, 95, 50, 1]\r\n[97, 84, 77, 28, 10]\r\n[22, 27, 11, 31, 62]\r\n[54, 81, 5, 34, 4]\r\n[89, 60, 29, 2, 75]\r\n[18, 36, 80, 7, 53]\r\n[25, 66, 43]",ITERATION:2019,NO:11,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"스트링, 상향, 최적, X",TITLE:"동적 프로그래밍 방법",QUESTION:"- 모든 정점 간의 최단 경로 문제와 ㅇㅇㅇ 편집 거리 문제에 적용된다. \r\n-(상향/하향)식 접근 방법 \r\n- ㅇㅇ성의 원리가 만족되는 문제에만 적용할 수 있다. \r\n- 소문제들은 서로 독립적이어야 한다. (O/X)",ITERATION:2019,NO:12,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:5},{ANSWER:13,TITLE:"피보나치 수열",QUESTION:"피보나치 수열 f(n)에서 f(7)은 얼마인가? \r\n (단, f(0) = 0, f(1) = 1이다.)",ITERATION:2019,NO:13,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:5},{ANSWER:4,TITLE:"행렬의 연쇄적 곱셈",QUESTION:"동적 프로그래밍 방법을 적용하여 n개의 행렬에 대한 연쇄적 곰셈 문제를 해결하는 알고리즘의 시간 복잡도는?\r\n1)O(nlogn)\r\n2)O(n)\r\n3)O(n²)\r\n4)O(n³)",ITERATION:2019,NO:14,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:5},{ANSWER:4,TITLE:"플로이드 알고리즘",QUESTION:"플로이드 알고리즘의 성능 표현으로 올바른 것은? \r\nFloyd (G=(V,E)) { // |V|=n \r\nD[][] <- 입력 간선의 인접 행렬로 초기화\r\nfor (k=1부터 n까지)\r\nfor (i=1부터 n까지)\r\nfor (j=1부터 n까지)\r\nif (D[i][j] > D[i][k] + D[k][j])\r\nD[i][j] = D[i][k] + D[k][j];\r\nreturn D[][];\r\n}\r\n1)O(nlogn)\r\n2)O(n)\r\n3)O(n²)\r\n4)O(n³)",ITERATION:2019,NO:15,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:4},{ANSWER:"크루스칼, 프림, 데이크스트라",TITLE:"욕심쟁이(greedy) 대표 고리즘",QUESTION:"- 최소 신장 트리: ㅇㅇㅇㅇ 알고리즘, ㅇㅇ 알고리즘 \r\n- 단일 출발점에 대한 최단 경로: ㅇㅇㅇㅇㅇㅇ 알고리즘",ITERATION:2019,NO:17,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"가중, 작은",TITLE:"최소 신장 트리",QUESTION:"최소 신장 트리는 신장 트리 중에서 ㅇㅇ치의 합이 가장 (큰/작은) 것",ITERATION:2019,NO:18,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:4},{ANSWER:"T6",TITLE:"욕심쟁이 방법",QUESTION:"욕심쟁이 방법을 적용한 작업 선택 문제에서 기계에 가장 먼저 할당되는 작업은? \r\nT1 = (0, 4), T2 = (4, 8), T3 = (6, 9), T4 = (9, 10), T5 = (1, 6), T6 = (1, 3), T7 = (3, 8), T8 = (4, 6)",ITERATION:2019,NO:19,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"비교, 분포",TITLE:"정렬 알고리즘",QUESTION:"- ㅇㅇ 기반의 알고리즘: 선택 정렬, 버블 정렬, 삽입 정렬, 셸 정렬, 퀵 정렬, 합병 정렬, 힙 정렬 \r\n - 데이터의 ㅇㅇ에 기반한 정보를 바탕으로 정을 수행하는 알고리즘: 계수 정렬, 기수 정렬, 버킷 정렬",ITERATION:2019,NO:20,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"유지, 불안정, 안정, 안정, 불안정, 불안정, 안정, 불안정, 안정",TITLE:"안정적 정렬",QUESTION:"안정적 정렬은 같은 값을 갖는 여러 개의 데이터에 대한 정렬 전의 상대적 위치가 정렬 후에도 그대로 ㅇㅇ되는 정렬이다.\r\n - 선택 정렬: (안정/불안정)\r\n - 버블 정렬: (안정/불안정)\r\n - 삽입 정렬: (안정/불안정)\r\n - 셸 정렬: (안정/불안정)\r\n - 퀵 정렬: (안정/불안정)\r\n - 합병 정렬: (안정/불안정)\r\n - 힙 정렬: (안정/불안정)\r\n - 데이터 분포 기반의 정렬: (안정/불안정)",ITERATION:2019,NO:21,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"10",TITLE:"버블 정렬",QUESTION:"다음 데이터에 대해 버블 정렬을 적용하여 오름차순으로 정렬할 때, 인접한 두 데이터 간의 자리바꿈이 발생하는 총 횟수는? \r\n [50, 40, 30, 20, 10]",ITERATION:2019,NO:22,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"선택",TITLE:"ㅇㅇ 정렬",QUESTION:"정렬되지 않은 데이터 중에서 가장 작은 값을 골라서, 이 값과 미정렬 데이터 부분의 첫 번째 원소와 교환하는 방식",ITERATION:2019,NO:23,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"O, 안정, O, O",TITLE:"삽입 정렬",QUESTION:"- 입력이 정렬된 상태로 주어지는 최선의 경우 수행시간은 O(n)이다. (O/X)\r\n- (안정/불안정)적인 정렬 알고리즘\r\n- 제자리 정렬 알고리즘이다. (O/X)\r\n- 최악의 수행시간은 O(n²)이다. (O/X)",ITERATION:2019,NO:24,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"nlogn, nlogn, 안정, X, O",TITLE:"합병 정렬",QUESTION:"- 최악의 수행시간은 O((n/nlogn))이다. \r\n- 최선의 수행시간은 O((n/nlogn))이다.\r\n- (안정/불안정)적인 정렬 알고리즘\r\n- 제자리 정렬 알고리즘이다. (O/X)\r\n- 분할정복 방법이 적용되었다. (O/X)",ITERATION:2019,NO:25,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"O, nlogn, 불안정, O, O",TITLE:"퀵 정렬",QUESTION:"- 최악의 수행시간은 O(n²)이다. (O/X)\r\n- 최선의 수행시간은 O((n/nlogn))이다.\r\n- (안정/불안정)적인 정렬 알고리즘\r\n- 제자리 정렬 알고리즘이다. (O/X)\r\n- 분할정복 방법이 적용되었다. (O/X)",ITERATION:2019,NO:26,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"제자리, 넘지 않는",TITLE:"ㅇㅇㅇ 정렬 알고리즘",QUESTION:"입력 데이터를 저장하는 공간 이외에 별도로 필요한 저장 공간이 상수 개를 (넘는/넘지 않는) 정렬 알고리즘",ITERATION:2019,NO:26,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"88",TITLE:"힙 정렬",QUESTION:"주어진 데이터를 오름차순으로 힙 정렬할 때, 루트 노드에 존재하는 데이터는? \r\n [10, 7, 15, 88, 50, 30, 40]",ITERATION:2019,NO:27,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"X, 상수, X, 안정, n",TITLE:"기수 정렬",QUESTION:"- 비교 기반의 정렬 알고리즘이다. (O/X)\r\n - 입력 데이터의 자릿수가 ㅇㅇ일 때 유용하다.\r\n - 제자리 정렬 알고리즘이다. (O/X)\r\n - (안정/불안정) 정렬 알고리즘이다.\r\n - 시간 복잡도는 O((n/n의 제곱))이다.",ITERATION:2019,NO:28,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"비정렬, 작은, O, 1, n, n, 1",TITLE:"순차 탐색",QUESTION:"- (정렬/비정렬) 데이터에 적합하다.\r\n - 크기가 (큰/작은) 데이터에 적합하다.\r\n - 리스트 형태의 입력에 언제라도 적용이 가능하다. (O/X)\r\n - 탐색 키가 존재하는 경우에는 최소 (1/n)번의 비교가 필요하다.\r\n - 탐색 키가 존재하지 않는 경우 항상 (n의 제곱/n)번의 비교가 필요하다.\r\n - 탐색과 삭제 연산의 시간 복잡도는 O((n/n의 제곱))이다.\r\n - 삽입 연산의 시간 복잡도는 O((1/n/logn))이다.",ITERATION:2019,NO:29,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:3},{ANSWER:"정렬, 작은, logn, nlogn, n",TITLE:"이진 탐색",QUESTION:"- (정렬/비정렬) 데이터에 적합하다.\r\n - 크기가 (큰/작은) 데이터에 적합하다.\r\n - 탐색 연산의 시간 복잡도는 O((n/logn/nlogn))이다.\r\n - 초기화 연산의 시간 복잡도는 O((n/logn/nlogn))이다.\r\n - 삽입과 삭제 연산의 시간 복잡도는 O((n/logn/nlogn))이다.",ITERATION:2019,NO:30,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:3},{ANSWER:"균형, 검정, 검정, 검정, 작다, 크다",TITLE:"레드-블랙 트리(흑적 트리)",QUESTION:"흑적 트리는 모든 노드에 대해 다음 성질을 만족하는 이진 트리인 ㅇㅇ 탐색 트리이다. \r\n- 모든 노드는 검정이거나 빨강이다. \r\n- 루프 노드와 리프 노드는 (검정/빨강)이다.\r\n- 빨강 노드의 부모 노드는 항상 (검정/빨강)이다.\r\n- 임의의 노드로부터 리프 노드까지의 경로상에는 동일한 개수의 (검정/빨강) 노드가 존재한다.\r\n- 한 노드의 왼쪽 서브트리에 있는 모든 키 값은 그 노드의 키값보다 (작다/크다).\r\n- 한 노드의 오른쪽 서브트리에 있는 모든 키 값은 그 노드의 키값보다 (크다/작다).",ITERATION:2019,NO:31,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:3},{ANSWER:4,TITLE:"탐색 트리",QUESTION:"모든 리프 노드의 레벨이 동일한 트리는? \r\n 1) 흑적 트리\r\n 2) 이진 탐색 트리\r\n 3) 완전 이진 트리\r\n 4) B-트리",ITERATION:2019,NO:32,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:3},{ANSWER:"1, logn, logn, n, logn, logn, logn",TITLE:"탐색 연산의 시간 복잡도",QUESTION:"- 이진 탐색 최선: O((1/n/logn))\r\n- 이진 탐색 최악: O((n/logn/nlogn))\r\n- 이진 탐색 트리 최선: O((1/n/logn))\r\n- 이진 탐색 트리 최악: O((n/logn/nlogn))\r\n- 2-3-4 트리: O((n/logn/nlogn))\r\n- 레드-블랙 트리: O((n/logn/nlogn))\r\n- B-트리: O((n/logn/nlogn))\r\n",ITERATION:2019,NO:33,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:3},{ANSWER:2,TITLE:"근사 알고리즘",QUESTION:"다음 NP-완전 문제의 근사 알고리즘을 통해 해결할 수 있는 문제는? \r\n- 주어진 그래프의 최소 신장 트리를 구한다.\r\n- 임의의 정점 하나를 루트 노드로 지정해서 최소 신장 트리를 깊이 우선 탐색 순서대로 정점을 나열하고 마지막에 첫 정점을 한 번 더 추가한다.\r\n1) 버텍스 커버 문제\r\n2) 외판원 문제\r\n3) CNF-만족성 문제\r\n4) 클리크 판정 문제",ITERATION:2019,NO:35,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:7},{ANSWER:"컴퓨터, 명확, O, 0, 1",TITLE:"알고리즘의 조건",QUESTION:"- 모든 명령은 ㅇㅇㅇ에서 수행 가능해야 한다. \r\n- 각 명령은 단순하고 ㅇㅇ해야 한다.\r\n- 한정된 수의 단계를 거친 후에는 반드시 끝나야 한다. (O/X)\r\n- 외부에서 (0/1)개 이상의 입력을 받아서 (0/1)개 이상의 출력을 생성해야 한다.",ITERATION:2018,NO:2,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:8,TITLE:"이진 트리",QUESTION:"최대 개수의 노드를 갖는 높이 4인 이진 트리에서 단말 노드의 개수는?",ITERATION:2018,NO:3,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:4},{ANSWER:"수행, 4",TITLE:"알고리즘의 시간 복잡도",QUESTION:"시간 복잡도는 알고리즘의 ㅇㅇ시간이다. 이는 무엇의 함수로 표현하는가? \r\n1) 입력 데이터의 값\r\n2) 프로그램에 사용된 동적 변수의 개수\r\n3) 프로그램 코드의 길이\r\n4) 입력 데이터의 크기",ITERATION:2018,NO:4,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"독립, 하향, 분할, 정복, 결합",TITLE:"분할정복 방법",QUESTION:"- 분할된 작은 문제는 서로 ㅇㅇ적이다.\r\n- (상향/하향)식 접근 방법\r\n- ㅇㅇ, ㅇㅇ, ㅇㅇ의 처리 과정을 거친다.",ITERATION:2018,NO:6,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"상향, 점화",TITLE:"동적 프로그래밍 방법",QUESTION:"- (상향/하향)식 접근 방법\r\n- ㅇㅇ식을 이용해서 보다 큰 문제의 해를 구한다.",ITERATION:2018,NO:6,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:4,TITLE:"퀵 정렬",QUESTION:"퀵 정렬 최악의 시간 복잡도에 해당하는 점화식은? \r\n1) T(1)=Θ(1), T(n)=2T(n/2)+Θ(n)\r\n2) T(1)=Θ(1), T(n)=T(n-1)+Θ(1)\r\n3) T(1)=Θ(1), T(n)=T(n/2)+Θ(1)\r\n4) T(1)=Θ(1), T(n)=T(n-1)+Θ(n)",ITERATION:2018,NO:8,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:5,TITLE:"퀵 정렬",QUESTION:"중간값들의 중간값을 사용하는 선택 문제에서 각 그룹은 몇 개의 원소로 구성되는가?",ITERATION:2018,NO:9,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"플로이드, 동적 프로그래밍, 분할정복, 분할정복, 욕심쟁이",TITLE:"알고리즘 설계기법",QUESTION:"다음의 알고리즘과 설계기법을 매칭하라. \r\n - 모든 정점 간의 최단 경로 구하는 알고리즘(ㅇㅇㅇㅇ 알고리즘): (욕심쟁이/분할정복/동적 프로그래밍) 방법\r\n - 합병 정렬: (욕심쟁이/분할정복/동적 프로그래밍) 방법\r\n - 최솟값과 최댓값을 모두 찾는 알고리즘: (욕심쟁이/분할정복/동적 프로그래밍) 방법\r\n - 작업 선택 문제: (욕심쟁이/분할정복/동적 프로그래밍) 방법",ITERATION:2018,NO:10,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:30,TITLE:"행렬의 연쇄적 곱셈",QUESTION:"다음과 같이 6개의 행렬을 곱할 때, C(1,2)의 값은? \r\n M1 x M2 x M3 x M4 x M5 x M6 \r\n 5 x 2, 2 x 3, 3 x 4, 4 x 6, 6 x 7, 7 x 8",ITERATION:2018,NO:11,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:5},{ANSWER:"이하, 경유, 최단",TITLE:"플로이드 알고리즘",QUESTION:"모든 정점 간의 최단 경로를 구할 때, d₄₃²은 정점 번호가 2 (이상/이하)인 정점만을 ㅇㅇ하는 정점 4에서 정점 3까지의 ㅇㅇ 경로 길이라고 한다.",ITERATION:2018,NO:12,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:5},{ANSWER:"정수",TITLE:"동적 프로그래밍 방법",QUESTION:"저울 문제에서 추의 무게는 ㅇㅇ이어야 한다.",ITERATION:2018,NO:13,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:5},{ANSWER:"X, 큰, 4",TITLE:"거스름돈 문제",QUESTION:"- 동전의 액면가가 임의로 주어지는 경우에도 욕심쟁이 방법으로 해결할 수 있다. (O/X)\r\n 동전의 액면가가 (큰/작은) 것 부터 최대한 사용해서 거스름돈을 만든다.\r\n 동전의 종류가 500원, 100원, 50원, 10원이면 거스름돈 750원에 대한 최적해는 ㅇ개이다.",ITERATION:2018,NO:14,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"1",TITLE:"최소 신장 트리",QUESTION:"다음 중 최소 신장 트리를 구하는 알고리즘은? \r\n1) 크루스칼 알고리즘\r\n2) 플로이드 알고리즘\r\n3) 데이크스트라 알고리즘\r\n4) KMP 알고리즘",ITERATION:2018,NO:15,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"t5",TITLE:"작업 스케줄링",QUESTION:"다음 작업에 대한 작업 스케줄링 문제의 최적해를 구하려고 한다. 가장 먼저 기계에 할당하는 작업은?\r\n t1=(2, 5), t2=(6, 9), t3=(4, 9), t4=(1, 4), t5=(0, 7), t6=(9, 10), t7=(7, 10), t8=(5, 8)",ITERATION:2018,NO:16,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"큰, d",TITLE:"데이터 압축 - 허프만 코딩",QUESTION:"텍스트 abcdbcdcdd를 허프만 코딩으로 인코딩하였을 때 가장 짧은 코드가 부여되는 문자는 빈도수가 가장 (큰/작은) 문자이므로 ㅇ이다.",ITERATION:2018,NO:17,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:6},{ANSWER:"X, O, 불안정, O, 작은",TITLE:"선택 정렬",QUESTION:"- 입력 데이터의 상태에 따라 성능이 달라진다. (O/X)\r\n- 입력 데이터와 무관하게 언제나 동일한 시간 복잡도를 갖는다. (O/X)\r\n- (안정/불안정)적인 정렬 알고리즘\r\n- 제자리 정렬 알고리즘이다. (O/X)\r\n- 오름차순 정렬의 경우 주어진 데이터 중에서 가장 (작은/큰) 값부터 골라 차례로 나열한다.",ITERATION:2018,NO:20,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"셸, n의 제곱, nlogn, 불안정, O",TITLE:"ㅇ 정렬",QUESTION:"- 삽입 정렬의 단점을 보완한 정렬 알고리즘\r\n- 최악의 경우 시간 복잡도: O((n/logn/n의 제곱/nlogn))\r\n- 최선의 경우 시간 복잡도: O((n/logn/n의 제곱/nlogn))\r\n- (안정/불안정)적인 정렬 알고리즘\r\n- 제자리 정렬 알고리즘이다. (O/X)",ITERATION:2018,NO:22,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:4,TITLE:"정렬 알고리즘",QUESTION:"평균적인 성능이 O(nlogn)인 안정적인 알고리즘은? \r\n1) 퀵 정렬\r\n2) 셸 정렬\r\n3) 힙 정렬\r\n4) 합병 정렬",ITERATION:2018,NO:23,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:4,TITLE:"정렬 알고리즘",QUESTION:"비교 기반 알고리즘 중에서 정렬 과정에서 입력 크기에 비례하는 만큼의 추가적인 저장 공간을 요구하는 것은? \r\n1) 퀵 정렬\r\n2) 셸 정렬\r\n3) 힙 정렬\r\n4) 합병 정렬",ITERATION:2018,NO:24,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"초기 힙, 크, 최대, 재구성",TITLE:"힙 정렬",QUESTION:"- 첫 번째 단계: 주어진 배열을 ㅇㅇ ㅇ으로 변환한다. 각 노드의 값은 자식 노드의 값보다 (크/작)거나 같다. \r\n- 두 번째 단계: 데이터의 개수만큼 반복하면서 (최소/최대)값을 삭제하고 힙으로 ㅇㅇㅇ하는 과정",ITERATION:2018,NO:25,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"70, 60, 50, 40, 20, 30, 10, 80",TITLE:"힙 정렬",QUESTION:"다음 배열에 대해 오름차순으로 정렬하는 힙 정렬의 두 번째 단계를 한 번 수행한 후의 배열의 상태를 올바르게 표현하면? \r\n[80, 60, 70, 40, 20, 30, 50, 10]",ITERATION:2018,NO:25,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"계수, 선형, 안정, X",TITLE:"ㅇㅇ 정렬",QUESTION:"- 주어진 원소 중에서 자신보다 작거나 같은 값을 갖는 원소의 개수를 계산하여 정렬할 위치를 찾아 정렬하는 방법\r\n- ㅇㅇ 시간의 성능을 가짐.\r\n- (안정/불안정)적인 정렬 알고리즘\r\n- 제자리 정렬 알고리즘이다. (O/X)",ITERATION:2018,NO:26,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"h, n, logn",TITLE:"이진 탐색 트리 탐색 연산",QUESTION:"- 높이가 h라면 탐색 연산의 시간 복잡도는 O((h/logh/2h/0.5h))이다. \r\n- 최악의 탐색 성능을 갖는 경우, 입력 크기 n에 대한 시간 복잡도는 O((n/logn/n의 제곱/nlogn))\r\n- 최선의 탐색 성능을 갖는 경우, 시간 복잡도는 O((n/logn/n의 제곱/nlogn))",ITERATION:2018,NO:27,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:3},{ANSWER:"리프, 후속자",TITLE:"이진 탐색 트리 삭제 연산",QUESTION:"- 자식 노드가 없는 경우: 삭제되는 노드가 ㅇㅇ 노드이므로 남은 노드가 없어 위치 조절 필요없다. \r\n- 자식 노드가 하나인 경우: 자식 노드를 삭제되는 노드의 위치로 올리면서 서브 트리 전체도 따라 올린다.\r\n- 자식 노드가 2개인 경우: 삭제 노드의 바로 다음 키값을 갖는 노드인 ㅇㅇㅇ 노드를 삭제 노드의 위치로 올린다.",ITERATION:2018,NO:28,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:3},{ANSWER:"2t-1, t-1",TITLE:"B-트리의 삽입 연산",QUESTION:"- 탐색할 자식 노드가 없으면 현재 리프 노드에 키로 추가한다. \r\n- 탐색 과정에서 키의 개수가 (t/2t/2t-1/2t+1)인 노드를 만다면 항상 노드 분할이 발생한다.\r\n- 노드 분할은 노드 하나를 (t/t-1/t+1)개의 키를 갖는 2개의 노드로 분할하는 것으로, 가운데 키를 부모 노드로 올린다.",ITERATION:2018,NO:30,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:3},{ANSWER:"개방, 폐쇄, 버, 선, 이, 이",TITLE:"해시 테이블 - 충돌 해결 방법",QUESTION:"- ㅇㅇ 해싱: 충돌된 데이터를 해시 테이블 밖의 별도의 장소에 저장 \r\n- ㅇㅇ 해싱: 충돌된 데이터를 해시 테이블 내의 다른 위치에 저장, ㅇ킷 해싱, ㅇ형 탐사, ㅇ차 탐사, ㅇ중 해싱 등",ITERATION:2018,NO:31,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:3},{ANSWER:"주소, 제산, 비닝, 중간",TITLE:"해시 함수",QUESTION:"- 키 값을 해시 테이블의 ㅇㅇ로 변환하는 함수 \r\n- 종류: ㅇㅇ 잔여법, ㅇㅇ, ㅇㅇ 제곱법 등",ITERATION:2018,NO:31,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:3},{ANSWER:"사이클, 정규곱, 클리크, 정점, 최소, 외판원, 1, 무한",TITLE:"NP-완전 문제",QUESTION:"- 해밀토니언 ㅇㅇㅇ 문제: 무방향 그래프 G가 주어졌을 때, G의 모든 정점을 한 번씩만 지나가는 사이클이 존재하는지 판정 \r\n- CNF 만족성 문제: ㅇㅇㅇ형으로 주어진 논리식을 참으로 만들 수 있는지 판정 \r\n- ㅇㅇㅇ 판정 문제: 그래프 G가 크기가 k인 클리크(완전 그래프가 되는 G의 부분 그래프)를 갖는지 판정. 크기가 k인 클리크는 ㅇㅇ이 k개인 클리크이다. \r\n- 버텍스 커버 문제: 그래프가 크기 k인 버텍스 커버(그래프의 모든 간선이 부수하는 (최소/최대) 크기의 부분 집합)를 갖는지 판정 \r\n- ㅇㅇㅇ 문제: 비용 R 이하로 모든 도시를 한 번씩만 방문하고 처음 도시로 돌아오는 방법이 존재하는지 판정 \r\n- 통 채우기 문제: 용량이 (1/무한)인 (1/무한)개의 빈 통에 다양한 크기의 물체를 전부 담을 수 있는지 판정",ITERATION:2018,NO:32,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:7},{ANSWER:"출발, 플로이드",TITLE:"그래프 - 최단 경로",QUESTION:"- 특정한 하나의 정점을 ㅇㅇ점으로 지정해서 다른 모든 정점으로의 최단 경로를 구하는 알고리즘: 데이크스트라, 벨만-포드 \r\n- 모든 정점 쌍 간의 최단 경로를 구하는 알고리즘: ㅇㅇㅇㅇ",ITERATION:2018,NO:32,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:4},{ANSWER:"다항, 속한다",TITLE:"NP-완전 문제",QUESTION:"클래스 NP에 속하는 모든 문제가 문제 A로 ㅇㅇ 시간에 변환되면서, 문제 A가 클래스 NP에 (속한다/속하지 않는다)는 것을 보여야 한다.",ITERATION:2018,NO:33,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:7},{ANSWER:"교차",TITLE:"유전 알고리즘의 연산",QUESTION:"ㅇㅇ: 부모의 형질을 나누어 갖는 연산으로, 다른 최적화 방법과 구별짓는 연산이다.",ITERATION:2018,NO:34,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"순열",TITLE:"NP-완전 문제",QUESTION:"ㅇㅇ 인코딩: 외판원 문제에 가장 적합한 염색체 인코딩 방법",ITERATION:2018,NO:34,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:7},{ANSWER:4,TITLE:"이진 트리",QUESTION:"깊이가 k인 이진 트리가 가질 수 있는 노드의 최대 개수는? \r\n1) 2^(k-1)\r\n2) 2^(k-1)-1\r\n3) 2^k\r\n4) 2^k-1",ITERATION:2017,NO:2,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"분할정복, 욕심쟁이, NP-완전 문제",TITLE:"알고리즘 설계기법",QUESTION:"- 이진 탐색: (욕심쟁이/분할정복)\r\n - 거스름돈 문제: (욕심쟁이/분할정복) \r\n - 0/1 배낭 문제: (동적 프로그래밍/NP-완전 문제)",ITERATION:2017,NO:3,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:4,TITLE:"버블 정렬",QUESTION:"한 단계의 수행 결과가 다음과 같을 때, 바로 다음 단계의 수행 결과를 얻기 위해서는 자리바꿈이 몇 번 발생하는가? \r\n 5(정렬), 35, 20, 10, 40, 25, 15, 30",ITERATION:2017,NO:8,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"logn, n, logn",TITLE:"탐색 알고리즘 시간 복잡도",QUESTION:"- 이진 탐색: O((n/logn/nlogn))\r\n - 순차 탐색: O((n/logn/nlogn)) \r\n - 흑적 트리: O((n/logn/nlogn))",ITERATION:2017,NO:19,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:3},{ANSWER:"3, 4, X",TITLE:"2-3-4 트리",QUESTION:"- 4-노드는 ㅇ개의 키와 ㅇ개의 자식을 갖는다. \r\n- 경사 트리가 발생한다. (O/X)",ITERATION:2017,NO:22,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:3},{ANSWER:"양, 독립된",TITLE:"강연결 성분",QUESTION:"- 주어진 방향 그래프에서 임의의 두 정점 사이에 (단/양)방향의 경로가 존재하는 최대 부분 그래프 \r\n- 단방향 경로로 연결되는 정점은 (독립된/같은) 강연결 성분이다.",ITERATION:2017,NO:25,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:4},{ANSWER:23,TITLE:"허프만 코딩",QUESTION:"스트링 [abracadabra]를 허프만 코딩으로 압축하였을 때 인코딩된 메시지의 길이는 몇 비트인가?",ITERATION:2017,NO:30,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:6},{ANSWER:"블록, 양자, 엔트로피",TITLE:"JPEG 표준의 압축 과정",QUESTION:"ㅇㅇ화 -> DCT -> ㅇㅇ화 -> ㅇㅇㅇㅇ 코딩",ITERATION:2017,NO:31,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:6},{ANSWER:3,TITLE:"알고리즘 설계 기법",QUESTION:"문자열 X를 문자열 Y로 변환하는 데 필요한 전체 편집 연산에 대한 최소 비용을 계산하는 문제를 가장 효과적으로 해결할 수 있는 기법은? \r\n1) 분할정복 방법\r\n2) 상각 분석 방법\r\n3) 동적 프로그래밍 방법\r\n4) 욕심쟁이 방법",ITERATION:2017,NO:32,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:1},{ANSWER:"최적, 점화, 작은, 큰",TITLE:"동적 프로그래밍",QUESTION:"주어진 문제가 ㅇㅇ성의 원리를 만족하면 적용 가능하며, 다음과 같은 과정을 따른다.\r\n - 주어진 문제에 대해서 최적해를 제공하는 ㅇㅇ식을 도출한다. \r\n - 가장 (작은/큰) 문제부터 해를 구한 뒤 이를 테이블에 저장한다. \r\n - 테이블에 저장된 문제의 해를 이용하여 점차적으로 (큰/작은) 문제의 해를 구한다.",ITERATION:2017,NO:33,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:5},{ANSWER:5,TITLE:"퀵 정렬",QUESTION:"다음 배열에 퀵 정렬의 분할 함수를 한 번 적용하였을 때 왼쪽 부분배열에 존재하는 데이터의 개수는? \r\n [26, 35, 15, 77, 10, 61, 11, 59, 17, 48, 19, 40, Infinity]",ITERATION:2016,NO:13,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"기수",TITLE:"ㅇㅇ 정렬",QUESTION:"주어진 원소들의 키 값을 자릿수별로 나누어서 낮은 자리부터 높은 자리로 반복해서 안정적인 정렬 알고리즘을 적용하여 정렬을 수행",ITERATION:2016,NO:15,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:5,TITLE:"이진 탐색 트리",QUESTION:"다음과 가튼 값들을 순서대로 삽입하여 이진 탐색 트리를 생성하였다. \r\n 이때 키 값 10을 탐색하는 데 필요한 최소의 비교 회수는?",ITERATION:2016,NO:20,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:3},{ANSWER:4,TITLE:"스트링 매칭",QUESTION:"브루트-포스 스트링 매칭 알고리즘에서 텍스트가 0000000001일 때, 비교횟수가 가장 적은 패턴의 형태는?\r\n1) 0001\r\n2) 0011\r\n3) 0111\r\n4) 1111",ITERATION:2016,NO:28,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:6},{ANSWER:3,TITLE:"스트링 매칭",QUESTION:"텍스트의 부분 스트링의 해시 값을 계산하여 그 값이 패턴의 해시 값과 일치하는지 비교하는 방식의 스트링 매칭 방법은?\r\n1) 보이어-무어 알고리즘\r\n2) 크루스칼 알고리즘\r\n3) 라빈-카프 알고리즘\r\n4) KMP 알고리즘",ITERATION:2016,NO:29,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:6},{ANSWER:4,TITLE:"문자열 압축",QUESTION:"한 번 나왔던 문자열이 다시 나오는 경우 문자열 대신 앞서 나온 위치와 길이로 변환하여 압축하는 방법?\r\n1) JPEG\r\n2) RLE\r\n3) MPEG\r\n4) LZ77",ITERATION:2016,NO:30,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:6},{ANSWER:"양자",TITLE:"JPEG",QUESTION:"- ㅇㅇ화: JPEG는 손실 압축 방법으로, 처리 과정 중에서 데이터의 손실이 발생하는 단게",ITERATION:2016,NO:31,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:6},{ANSWER:4,TITLE:"PRAM",QUESTION:"PRAM 모델 중에서 데이터 관점에서 가장 현실적인 방식은?\r\n1) ERCW\r\n2) EREW\r\n3) CRCW\r\n4) CREW",ITERATION:2016,NO:34,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:7},{ANSWER:1,TITLE:"정렬",QUESTION:"정렬을 수행하는 과정에서 내부적으로 다른 정렬 방법을 사용하는 것은?\r\n1) 기수 정렬\r\n2) 계수 정렬\r\n3) 삽입 정렬\r\n4) 합병 정렬",ITERATION:2015,NO:9,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:2},{ANSWER:"너비",TITLE:"ㅇㅇ 우선 탐색",QUESTION:"주변 정점 중에서 오래된 것을 우선적으로 방문하는 그래프 순회 방법",ITERATION:2015,NO:17,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:4},{ANSWER:1,TITLE:"브루트-포스 스트링 매칭 알고리즘",QUESTION:"텍스트가 0000000001일 때 비교 횟수가 가장 많은 패턴의 형태는?\r\n1) 0001\r\n2) 0011\r\n3) 0111\r\n4) 1111",ITERATION:2015,NO:22,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:6},{ANSWER:"보이어-무어",TITLE:"스트링 매칭",QUESTION:"- (보이어-무어/라빈-카프) 알고리즘: 불일치 문자 방법과 일치 접미부 방법 사용",ITERATION:2015,NO:23,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:6},{ANSWER:"결정론, 다항",TITLE:"클래스 P",QUESTION:"(결정론/비결정론)적 튜링 기계에 의해 ㅇㅇ식 시간에 풀 수 있는 모든 판정 문제의 집합",ITERATION:2015,NO:29,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:7},{ANSWER:"변환",TITLE:"ㅇㅇ",QUESTION:"문제 A의 입력과 출력을 문제 B의 입력과 출력 형태로 바꿀 수 있고\r\n 문제 B를 해결하는 알고리즘을 적용함으로써 궁극적으로 문제 A를 해결할 수 있다.",ITERATION:2015,NO:30,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:7},{ANSWER:3,TITLE:"PRAM",QUESTION:"PRAM 모델을 메모리 접근 방식에 따라 구분할 때\r\n 여러 프로세서가 메모리의 같은 위치에 동시에 접근하여 읽고 쓸 수 있는 방식은?\r\n1) ERCW\r\n2) EREW\r\n3) CRCW\r\n4) CREW",ITERATION:2016,NO:31,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:7},{ANSWER:"전치, 순서, 치환",TITLE:"고대 암호",QUESTION:"- ㅇㅇ법: 평문에 있는 문자들의 ㅇㅇ를 바꿈으로써 암호화하는 기법 \r\n - ㅇㅇ법: 평문의 문자들을 다른 문자로 치환함으로써 암호화하는 기법",ITERATION:2019,NO:40,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"전치, 치환, 치환",TITLE:"고대 암호",QUESTION:"- 스파르타의 봉 암호: (전치/치환)법 \r\n - 시저 암호: (전치/치환)법 \r\n - 시프트 암호: 알파벳에 대해 26가지 서로 다른 키가 존재하는 (전치/치환)법",ITERATION:2019,NO:40,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"같은, 빠름, 블록, 스트림",TITLE:"대칭키 암호",QUESTION:"- 암호화와 복호화에 (같은/다른) 키를 사용하는 방식 \r\n - 공개키 암호에 비해 속도가 (빠름/느림).\r\n - ㅇㅇ 암호와 평문과 키를 비트 단위로 XOR하여 암호문을 얻는 ㅇㅇㅇ 암호로 나뉨.",ITERATION:2019,NO:41,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"다른, 누구나, 암호, 본인만, 복호",TITLE:"공개키 암호",QUESTION:"- 암호화와 복호화에 (같은/다른) 키를 사용하는 방식 \r\n - 공개키: (본인만/누구나) 공개키를 이용하여 (암호/복호)화 가능 \r\n - 개인키: (본인만/누구나) 공개키를 이용하여 (암호/복호)화 가능",ITERATION:2019,NO:41,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"랜섬웨어",TITLE:"ㅇㅇㅇㅇ",QUESTION:"사용자의 문서 파일 등을 암호화한 후 암호를 풀기 위해서는 비트코인 등을 송금하도록 유도하는 악성코드",ITERATION:2019,NO:45,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"스푸핑",TITLE:"ㅇㅇㅇ",QUESTION:"피해 호스트가 신뢰하는 호스트로 가정하여 정보를 수집하거나 가로채는 방식의 공격",ITERATION:2019,NO:46,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"분산",TITLE:"ㅇㅇ 서비스 공격",QUESTION:"여러 대의 공격자를 분산적으로 배치해 동시에 대량의 데이터를 전송하여 \r\n  특정 서비스나 자원의 가용성을 떨어트리는 결과를 초래하는 유형의 공격",ITERATION:2019,NO:47,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"사전",TITLE:"ㅇㅇ 공격",QUESTION:"ID와 패스워드가 될 가능성이 있는 단어를 미리 모아두고 이 단어를 대입하며 계정을 크랙하는 공격",ITERATION:2019,NO:48,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"시그니처, 통계적, X",TITLE:"침입탐지 시스템(IDS)",QUESTION:"- ㅇㅇㅇㅇ 분석: 알려진 공격에 대한 패턴을 활용하여 침입을 탐지. 알려지지 않은 공격은 대처 불가 \r\n - ㅇㅇㅇ 분석: 정상적인 행위 패턴으로부터 편차를 찾아 판정. 잘못된 경고 신호를 보낼 가능성 높음. \r\n - 무결성 분석: 실시간 대응에 도움 (O/X)",ITERATION:2019,NO:50,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"클리어, 암호, 암호",TITLE:"S/MIME 메시지 구성",QUESTION:"- 서명된 데이터: 콘텐트와 전자서명을 base64로 부호화 \r\n- ㅇㅇㅇ 서명 데이터: 전자서명만 base64로 부호화 \r\n- 서명 및 봉인된 데이터: ㅇㅇ화된 데이터는 서명될 수 있고 서명된 데이터나 클리어 서명 데이터는 ㅇㅇ화될 수 있음.",ITERATION:2019,NO:54,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:3,TITLE:"웹 보안",QUESTION:"URL에 사용자 ID를 포함하도록 웹 서비스를 구성한 경우 이를 통한 공격을 일컫는 위협 요소?\r\n1) SQL Injection\r\n2) 크로스 사이트 스크립팅(XSS)\r\n3) 접근제어 실패\r\n4) 웹 클라이언트 공격",ITERATION:2019,NO:56,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"무결",TITLE:"정보보호의 목표",QUESTION:"ㅇㅇ성: 허락되지 않은 자가 정보를 함부로 수정할 수 없도록 하는 것",ITERATION:2018,NO:37,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"웜, 트로이, 스캐닝",TITLE:"악성코드",QUESTION:"- (바이러스/웜): 네트워크를 통해 스스로 감염되며 숙주가 필요 없음.\r\n- ㅇㅇㅇ 목마: 정상적인 기능을 하는 프로그램으로 가장하여 프로그램 내에 숨어 의도하지 않은 기능을 수행\r\n- ㅇㅇㅇ : 공격대상 호스트들이나 네트워크에 대한 취약점을 발견하기 위한 사전 정보수집 활동",ITERATION:2018,NO:43,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"정보, 권한, 공격, 재침입",TITLE:"서버의 침입 및 정보유출 단계",QUESTION:"ㅇㅇ 획득 단계 -> ㅇㅇ 획득 단계 -> ㅇㅇ 단계 -> ㅇㅇㅇ 단계",ITERATION:2018,NO:46,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"시스템, 관리자, 침입, 백도어, 유출, 비권한",TITLE:"서버의 침입 및 정보유출 단계",QUESTION:"- 정보 획득 단계: 공격 대상 ㅇㅇㅇ 결정 \r\n- 권한 획득 단계: 일반 사용자와 ㅇㅇㅇ 권한 획득 \r\n- 공격 단계: ㅇㅇ 흔적 지우고 ㅇㅇㅇ 설치 \r\n- 재침입 단계: 다른 시스템 공격, 정보 변경 또는 ㅇㅇ, 다른 ㅇㅇㅇ 행위 수행",ITERATION:2018,NO:46,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:3,TITLE:"정보 유출 공격",QUESTION:"사람을 속여서 민감한 정보를 유츨하게 하는 공격은?\r\n1) 버퍼 오버플로 공격\r\n2) 사전 공격\r\n3) 사회공학적인 공격\r\n4) 레이스 컨디션 공격",ITERATION:2018,NO:47,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:3,TITLE:"방화벽 구성 방식",QUESTION:"강력한 로그인, 감시 기능이 있으며 프락시 서버를 활용하여 확장성이 우수하지만 속도가 빠르지 않은 방화벽의 구성 방식은?\r\n1) 패킷 필터링\r\n2) 서킷 게이트웨이\r\n3) 애플리케이션 게이트웨이\r\n4) 하이브리드 방식",ITERATION:2018,NO:48,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"공중, 사설",TITLE:"가상사설망(VPN)",QUESTION:"(공중/사설)망을 이용하여 (공중/사설)망처럼 직접 운용 관리하는 것",ITERATION:2018,NO:51,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"인증, 기밀성, 압축, 이메일",TITLE:"PGP 보안 서비스와 알고리즘",QUESTION:"- ㅇㅇ: SHA와 DSA 또는 RSA의 결합 \r\n - ㅇㅇㅇ: 메시지 암호화를 위해 대칭키인 TDEA, AES, IDEA와 공개키인 RSA를 사용 \r\n - ㅇㅇ: ZIP 사용\r\n - ㅇㅇㅇ 호환성: 기수 64 변환",ITERATION:2018,NO:52,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"증거, 포장, 분석, 검토, 보고서",TITLE:"디지털 포렌식 수행 과정",QUESTION:"사전 준비 -> ㅇㅇ 수집 -> ㅇㅇ 및 이송 -> 조사 ㅇㅇ -> 정밀 ㅇㅇ -> ㅇㅇㅇ 작성",ITERATION:2018,NO:58,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"해시 함수, 블록 암호",TITLE:"메시지 인증 알고리즘",QUESTION:"- HMAC: ㅇㅇ ㅇㅇ에 기반을 둠.\r\n - CMAC: ㅇㅇ ㅇㅇ에 기반을 둠.",ITERATION:2017,NO:42,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"스니핑",TITLE:"사이버 공격",QUESTION:"- ㅇㅇㅇ: 네트워크상의 데이터를 도청하는 행위를 일컫는 사이버 공격 방식",ITERATION:2017,NO:46,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"수동, 접속, 능동, 무결",TITLE:"네트워크 보안",QUESTION:"- ㅇㅇ적 공격: 통신회선상의 정보를 무단으로 취득하는 행위로, 방어를 위해 제3자의 ㅇㅇ시도를 방지함.\r\n - ㅇㅇ적 공격: 통신회선상의 정보를 변조 및 위조하는 행위로 수신 측에서 데이터에 대한 ㅇㅇ성을 확인해 방어함.",ITERATION:2017,NO:48,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:4,TITLE:"보안시스템",QUESTION:"침입차단 시스템의 구축 형태 중 중립적인 네트워크인 비무장지대(DMZ)를 구축하는 것은?\r\n1) 스크리닝 라우터\r\n2) 베스천 호스트\r\n3) 스크린 호스트 게이트웨이\r\n4) 스크린 서브넷 게이트웨이",ITERATION:2017,NO:51,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"전자서명, 세션, 해시함수, 암호",TITLE:"S/MIME 알고리즘",QUESTION:"- ㅇㅇㅇㅇ: RSA와 ECDSA 사용\r\n- ㅇㅇ키 분배: RSA와 ECDH 사용\r\n- ㅇㅇㅇㅇ: SHA 사용\r\n- 메시지 ㅇㅇ화: AES사용",ITERATION:2017,NO:55,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:1,TITLE:"보안시스템",QUESTION:"무선 LAN 환경에서 기밀성을 제공하기 위한 알고리즘이지만 현재는 취약성이 드러나 사용하지 않는 것은?\r\n1) WEP\r\n2) RSN\r\n3) EAP\r\n4) WPA2",ITERATION:2017,NO:58,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"바이러스",TITLE:"악성코드",QUESTION:"시스템이나 사용자의 파일에 자신을 복제하고 그 컴퓨터 시스템 내에서 증식하거나 시스템을 파괴하는 것은?",ITERATION:2016,NO:37,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"TLS",TITLE:"ㅇㅇㅇ",QUESTION:"SSL 3.0을 기반으로 한 업그레이드 프로토콜로 트랜스포트 계층에 적용하는 보안 프로토콜",ITERATION:2016,NO:43,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"서명, 압축, 암호, 64",TITLE:"PGP 송신측 전송 과정",QUESTION:"해시코드를 사용하여 ㅇㅇ을 생성 -> ㅇㅇ -> ㅇㅇ화 -> 기수 ㅇㅇ 형식으로 변환",ITERATION:2016,NO:44,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"이진, 복호, 압축, 비교",TITLE:"PGP 수신측 전송 과정",QUESTION:"ㅇㅇ 형식으로 변환 -> ㅇㅇ화 -> ㅇㅇ 해제 -> 서명으로부터 복구한 해시코드를 자신이 계산한 해시코드와 ㅇㅇ",ITERATION:2016,NO:44,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:3,TITLE:"보안 시스템",QUESTION:"허가받지 않은 접근이나 해킹 시도를 감지하여 자동으로 대응 작업을 수행하여 행위를 중지시키는 시스템은?\r\n1) 침입탐지 시스템(IDS)\r\n2) 침입차단 시스템(Firewall)\r\n3) 침입방지 시스템(IPS)\r\n4) 가상사설망(VPN)",ITERATION:2016,NO:51,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"무결성",TITLE:"ㅇㅇㅇ 분석",QUESTION:"- 파일이나 객체의 어떤 측면이 변경되었는지 초점\r\n- 해시 알고리즘 같은 강력한 암호 매커니즘 사용",ITERATION:2016,NO:53,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:1,TITLE:"VPN",QUESTION:"공중망을 통하여 기업과 전략적인 업무파트너 기업 사이만 연결한 VPN은?\r\n1) 익스트라넷 VPN\r\n2) 원격접속 VPN\r\n3) 인트라넷 VPN\r\n4) 복합형 VPN",ITERATION:2016,NO:57,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"스니핑",TITLE:"ㅇㅇㅇ",QUESTION:"Passive의 경우 무차별 모드를 이용하여 패킷 내의 정보를 조작 없이 단순히 도청하는 것이며, \r\n Active의 경우 ARP 스푸핑을 이용하여 공격 대상자들의 패킷 방향을 조작하여 내용을 훔쳐보거나 변조하는 방식",ITERATION:2015,NO:38,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"},{ANSWER:"대응, 능동, 소프트웨어",TITLE:"침입방지 시스템",QUESTION:"- 공격탐지 시 자동으로 ㅇㅇ작업을 수행하여 행위를 중지시키는 시스템 \r\n - 침입탐지 시스템과는 대비되어 (수동/능동)적으로 동작 \r\n- 호스트 기반 침입방지 시스템은 (소프트웨어/하드웨어) 제품이 일반적임.",ITERATION:2015,NO:55,IS_CORRECT:!1,IS_ENTERED:!1,SUBJECT:"보안"}];const Q={name:"App",components:{},setup:function(){var E=(0,D.KR)(0);function T(T){E.value=T,N()}(0,R.sV)((function(){return T(1)}));var I=(0,D.KR)([]),n=(0,R.EW)((function(){return I.value.find((function(E){return!E.IS_ENTERED}))})),S=(0,R.EW)((function(){var E=I.value.length,T=I.value.filter((function(E){return E.IS_CORRECT})),n=T.length;return"".concat(n,"/").concat(E)}));function N(){I.value=W.filter((function(T){var I=T.SUBJECT;return I===E.value})),n.value&&(0,R.dY)((function(){return U()}))}function O(){I.value.sort((function(){return Math.random()-Math.random()})),U()}var r=(0,D.KR)(null),C=(0,R.EW)((function(){return n.value.ANSWER})),A=(0,D.KR)(!1),_=(0,D.KR)(0);function U(){r.value.value="",r.value.focus(),A.value=!1}function e(E){var T=E.timeStamp;if(A.value)return T-_.value>500?t():null;var I=r.value.value;n.value.IS_CORRECT=o(C.value)===o(I),A.value=!0,_.value=T}function t(){if(n.value.IS_CORRECT)n.value.IS_ENTERED=!0;else{var E=I.value.findIndex((function(E){return E===n.value})),T=I.value.splice(E,1),R=(0,L.A)(T,1),S=R[0];I.value.push(S)}U()}function o(E){return String(E).toUpperCase().replace(/ |,/g,"")}return{subjects:["보안","유비"],selectedSubject:E,selectSubject:T,currentQuestion:n,questionMark:S,changeQuestionList:N,shuffleQuestionList:O,answerRef:r,isAnswerEntered:A,checkAnswer:e,validateAnswer:o,passAnswer:t}}};var B=I(1241);const J=(0,B.A)(Q,[["render",u]]),i=J;(0,n.Ef)(i).mount("#app")}},T={};function I(n){var R=T[n];if(void 0!==R)return R.exports;var S=T[n]={exports:{}};return E[n].call(S.exports,S,S.exports,I),S.exports}I.m=E,(()=>{var E=[];I.O=(T,n,R,S)=>{if(!n){var N=1/0;for(A=0;A<E.length;A++){for(var[n,R,S]=E[A],O=!0,r=0;r<n.length;r++)(!1&S||N>=S)&&Object.keys(I.O).every((E=>I.O[E](n[r])))?n.splice(r--,1):(O=!1,S<N&&(N=S));if(O){E.splice(A--,1);var C=R();void 0!==C&&(T=C)}}return T}S=S||0;for(var A=E.length;A>0&&E[A-1][2]>S;A--)E[A]=E[A-1];E[A]=[n,R,S]}})(),(()=>{I.n=E=>{var T=E&&E.__esModule?()=>E["default"]:()=>E;return I.d(T,{a:T}),T}})(),(()=>{I.d=(E,T)=>{for(var n in T)I.o(T,n)&&!I.o(E,n)&&Object.defineProperty(E,n,{enumerable:!0,get:T[n]})}})(),(()=>{I.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(E){if("object"===typeof window)return window}}()})(),(()=>{I.o=(E,T)=>Object.prototype.hasOwnProperty.call(E,T)})(),(()=>{var E={524:0};I.O.j=T=>0===E[T];var T=(T,n)=>{var R,S,[N,O,r]=n,C=0;if(N.some((T=>0!==E[T]))){for(R in O)I.o(O,R)&&(I.m[R]=O[R]);if(r)var A=r(I)}for(T&&T(n);C<N.length;C++)S=N[C],I.o(E,S)&&E[S]&&E[S][0](),E[S]=0;return I.O(A)},n=self["webpackChunkjungcheogi"]=self["webpackChunkjungcheogi"]||[];n.forEach(T.bind(null,0)),n.push=T.bind(null,n.push.bind(n))})();var n=I.O(void 0,[504],(()=>I(9799)));n=I.O(n)})();
//# sourceMappingURL=app.b497c70f.js.map