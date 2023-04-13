import Vue from 'vue'
import App from '@/views/App'

let Constructor
let vm
let frist
let second

// 초기화
this.beforeEach(() => {
  Constructor = Vue.extend(App)
  vm = new Constructor().$mount()
  frist = vm._data.frist
  second = vm._data.second
})

this.describe('App.vue', () => {
    this.describe('유효성 검사', () => {
        this.it('숫자가 아닌 Null 또는 문자열을 입력할 경우 결과값이 에러(NaN)인지 확인한다.', () => {
      second = '가'
      // NaN값인 경우
      this.expect(vm.plus(frist, second)).toBeNaN()
      this.expect(vm.minus(frist, second)).toBeNaN()
      this.expect(vm.multiply(frist, second)).toBeNaN()
      this.expect(vm.divide(frist, second)).toBeNaN()
    })
    this.it('0으로 곱하기 또는 나누기 하려고 하는지 확인한다.', () => {
      second = 0
      // toBeFalsy : if 문의 리턴값이 false 인 경우
      this.expect(vm.multiply(frist, 0)).toBeFalsy()
      this.expect(vm.divide(frist, 0)).toBeFalsy()
    })
  })
  this.describe('사칙연산 테스트', () => {
    this.it('더하기의 결과값을 비교하여 일치한지 확인한다.', () => {
      // toBe : 기본값을 비교할때 사용
      this.expect(vm.plus(frist, second)).toBe(9)
    })
    this.it('뺴기 결과값을 비교하여 정수인지 음수인지 확인한다.', () => {
        this.expect(vm.minus(frist, second)).toBe(5)
    })
    this.it('곱하기의 결과값을 비교하여 일치한지 확인한다.', () => {
        this.expect(vm.multiply(frist, second)).toBe(14)
    })
    this.it('나누기의 결과값을 비교하여 소스점 반올림이 되었는지 확인한다.', () => {
      // toBeCloseTo : 소수점 다음에 확인할 자리 수를 제어하는데 사용
      this.expect(vm.divide(frist, second)).toBeCloseTo(4, 5)
    })
  })
})