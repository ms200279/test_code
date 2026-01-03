/**
 * Header.jsx - 상단 고정 네비게이션 헤더 컴포넌트
 * 
 * 스크롤 시 배경색이 변경되는 스티키 헤더입니다.
 * - 페이지 상단에 고정 (fixed)
 * - 스크롤 20px 이상 시 반투명 배경과 그림자 표시
 * - 반응형 네비게이션 (모바일에서는 링크 숨김)
 */

import { useState, useEffect } from 'react'

export default function Header() {
  // 스크롤 여부 상태: 20px 이상 스크롤했는지 추적
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // 스크롤 이벤트 핸들러: 스크롤 위치가 20px 이상이면 true
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20) // window.scrollY: 현재 스크롤 위치 (픽셀)
    }

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll)
    // 클린업: 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md' // 스크롤 시: 반투명 흰색 배경 + 블러 + 그림자
          : 'bg-transparent' // 초기 상태: 투명 배경
      }`}
      // fixed: 상단에 고정
      // z-50: 다른 요소 위에 표시
      // transition-all duration-300: 300ms 동안 부드러운 전환 효과
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 컨테이너: 최대 너비 제한, 가로 중앙 정렬, 반응형 패딩 */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* flex: 가로 배치, items-center: 세로 중앙 정렬, justify-between: 양쪽 끝 정렬 */}
          {/* h-16 md:h-20: 모바일 64px, 데스크톱 80px 높이 */}
          
          {/* 로고 영역 */}
          <div className="text-xl md:text-2xl font-bold text-gray-900">
            Logo
            {/* text-xl md:text-2xl: 모바일 20px, 데스크톱 24px 크기 */}
          </div>
          
          {/* 네비게이션 링크 (데스크톱에서만 표시) */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* hidden md:flex: 모바일에서 숨김, 태블릿 이상에서 flex 표시 */}
            {/* space-x-6 lg:space-x-8: 링크 간 간격 (24px / 32px) */}
            <a
              href="#features"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              aria-label="Features"
            >
              Features
            </a>
            <a
              href="#showcase"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              aria-label="Showcase"
            >
              Showcase
            </a>
            <a
              href="#banners"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              aria-label="Banners"
            >
              Banners
            </a>
            <a
              href="#cta"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              aria-label="Contact"
            >
              Contact
            </a>
          </div>

          {/* CTA 버튼 */}
          <button
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            // bg-gradient-to-r: 좌우 그라데이션
            // hover:scale-105: 호버 시 5% 확대
            // shadow-lg hover:shadow-xl: 그림자 효과
            aria-label="Get Started"
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  )
}

