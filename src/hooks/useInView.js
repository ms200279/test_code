/**
 * useInView.js - IntersectionObserver를 사용한 뷰포트 감지 커스텀 훅
 * 
 * 이 훅은 요소가 뷰포트에 보이는지 감지하고, 한 번이라도 보였는지 추적합니다.
 * 스크롤 애니메이션에 사용됩니다.
 * 
 * @param {Object} options - IntersectionObserver 옵션
 * @param {number} options.threshold - 요소가 몇 % 보여야 감지할지 (기본값: 0.1 = 10%)
 * @param {string} options.rootMargin - 뷰포트 마진 (기본값: '0px')
 * @returns {Array} [ref, isInView, hasBeenInView]
 *   - ref: DOM 요소에 연결할 ref
 *   - isInView: 현재 뷰포트에 보이는지 여부
 *   - hasBeenInView: 한 번이라도 뷰포트에 보였는지 여부 (애니메이션 재생용)
 */

import { useState, useEffect, useRef } from 'react'

export function useInView(options = {}) {
  // 현재 뷰포트에 보이는지 여부 (스크롤 시 계속 변경됨)
  const [isInView, setIsInView] = useState(false)
  // 한 번이라도 뷰포트에 보였는지 여부 (한 번 true가 되면 계속 true 유지)
  const [hasBeenInView, setHasBeenInView] = useState(false)
  // DOM 요소를 참조하기 위한 ref
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return // 요소가 없으면 종료

    // IntersectionObserver 옵션 설정
    const observerOptions = {
      threshold: options.threshold || 0.1, // 요소의 10%가 보이면 감지
      rootMargin: options.rootMargin || '0px', // 뷰포트 마진 없음
      ...options, // 추가 옵션 병합
    }

    // IntersectionObserver 생성: 요소가 뷰포트에 들어오거나 나갈 때 콜백 실행
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 보일 때
          setIsInView(true)
          setHasBeenInView(true) // 한 번이라도 보였으므로 true로 설정 (재설정 안 됨)
        } else {
          // 요소가 뷰포트에서 벗어났을 때
          setIsInView(false)
          // hasBeenInView는 true로 유지 (애니메이션이 다시 사라지지 않도록)
        }
      })
    }, observerOptions)

    // 요소 관찰 시작
    observer.observe(element)

    // 클린업: 컴포넌트 언마운트 시 observer 해제
    return () => {
      observer.disconnect()
    }
  }, [options.threshold, options.rootMargin]) // 옵션이 변경되면 재설정

  return [ref, isInView, hasBeenInView]
}

