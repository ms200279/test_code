/**
 * useScrollProgress.js - 스크롤 진행도를 추적하는 커스텀 훅
 * 
 * 이 훅은 페이지 스크롤 진행도를 0~1 사이의 값으로 반환합니다.
 * requestAnimationFrame을 사용하여 성능을 최적화합니다.
 * 
 * @returns {number} scrollProgress - 0 (맨 위) ~ 1 (맨 아래) 사이의 스크롤 진행도
 */

import { useState, useEffect } from 'react'

export function useScrollProgress() {
  // 스크롤 진행도: 0 (페이지 맨 위) ~ 1 (페이지 맨 아래)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let rafId = null // requestAnimationFrame ID 저장용
    let ticking = false // 중복 실행 방지 플래그

    // 스크롤 진행도를 계산하는 함수
    const updateScrollProgress = () => {
      // 현재 스크롤 위치 (픽셀)
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      // 전체 스크롤 가능한 높이 (전체 높이 - 뷰포트 높이)
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      // 진행도 계산: 현재 위치 / 전체 스크롤 가능한 높이
      // 0 = 맨 위, 1 = 맨 아래
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      setScrollProgress(progress)
      ticking = false // 다음 스크롤 이벤트를 받을 수 있도록 플래그 해제
    }

    // 스크롤 이벤트 핸들러 (성능 최적화를 위해 requestAnimationFrame 사용)
    const handleScroll = () => {
      if (!ticking) {
        // requestAnimationFrame으로 다음 프레임에 진행도 업데이트
        // 이렇게 하면 스크롤 이벤트가 많이 발생해도 브라우저 리프레시 주기에 맞춰 실행됨
        rafId = requestAnimationFrame(updateScrollProgress)
        ticking = true // 중복 실행 방지
      }
    }

    // 스크롤 이벤트 리스너 등록
    // passive: true - 스크롤 성능 최적화 (preventDefault 호출 불가, 더 부드러운 스크롤)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // 초기 계산 (페이지 로드 시 진행도 설정)

    // 클린업: 컴포넌트 언마운트 시 이벤트 리스너 제거 및 애니메이션 프레임 취소
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, []) // 마운트 시 한 번만 실행

  return scrollProgress
}

