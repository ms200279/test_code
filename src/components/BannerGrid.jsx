/**
 * BannerGrid.jsx - 배너 그리드 레이아웃 컴포넌트
 * 
 * banners.json 데이터를 기반으로 반응형 그리드 레이아웃을 생성합니다.
 * 각 카드가 뷰포트에 들어올 때 개별적으로 활성화되는 스크롤 애니메이션을 제공합니다.
 * 
 * 그리드 레이아웃:
 * - 모바일: 1열
 * - 태블릿: 2열
 * - 데스크톱: 4열 (large 카드는 2칸 차지)
 */

import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import Card from './Card'
import bannersData from '../data/banners.json'

export default function BannerGrid() {
  // 전체 그리드가 뷰포트에 보였는지 감지 (전체 fade-in용)
  const [ref, isInView, hasBeenInView] = useInView({ threshold: 0.1 })
  // 개별 카드가 활성화되었는지 추적하는 Set (카드별 애니메이션용)
  const [activeCards, setActiveCards] = useState(new Set())

  useEffect(() => {
    // 전체 그리드가 뷰포트에 보이지 않으면 개별 카드 관찰 시작 안 함
    if (!hasBeenInView) return

    // 각 카드에 대한 IntersectionObserver 옵션
    const observerOptions = {
      threshold: 0.3, // 카드의 30%가 보이면 활성화
      rootMargin: '-50px', // 뷰포트에서 50px 안쪽에 들어와야 감지 (더 정확한 타이밍)
    }

    // 각 배너 데이터에 대해 IntersectionObserver 생성
    const observers = bannersData.map((banner) => {
      // 각 카드의 DOM 요소 찾기
      const cardElement = document.getElementById(`banner-${banner.id}`)
      if (!cardElement) return null // 요소가 없으면 null 반환

      // 개별 카드용 IntersectionObserver 생성
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 카드가 뷰포트에 보이면 activeCards Set에 추가
            setActiveCards((prev) => new Set([...prev, banner.id]))
            // Set을 사용하여 중복 방지 및 빠른 조회
          }
        })
      }, observerOptions)

      // 카드 요소 관찰 시작
      observer.observe(cardElement)
      return observer // 클린업을 위해 observer 반환
    })

    // 클린업: 컴포넌트 언마운트 또는 hasBeenInView 변경 시 모든 observer 해제
    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect() // observer가 null이 아닐 때만 해제
      })
    }
  }, [hasBeenInView]) // hasBeenInView가 변경될 때마다 재실행

  /**
   * 카드 크기에 따른 그리드 컬럼 span 반환
   * @param {string} size - 'large' | 'medium' | 'small'
   * @returns {string} Tailwind CSS 클래스
   */
  const getGridCols = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 lg:col-span-2' // 태블릿/데스크톱에서 2칸 차지
      case 'medium':
        return 'md:col-span-1 lg:col-span-1' // 1칸 차지
      case 'small':
        return 'md:col-span-1 lg:col-span-1' // 1칸 차지
      default:
        return 'md:col-span-1 lg:col-span-1' // 기본값: 1칸
    }
  }

  return (
    <div
      ref={ref} // 전체 그리드의 뷰포트 감지용 ref
      className={`container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${
        hasBeenInView ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-500`}
      // container: 최대 너비 제한 및 가로 중앙 정렬
      // py-16 md:py-24: 세로 패딩 (64px / 96px)
      // 전체 그리드 fade-in 애니메이션
    >
      {/* 반응형 그리드 레이아웃 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* grid: CSS Grid 레이아웃 */}
        {/* grid-cols-1: 모바일 1열, md:grid-cols-2: 태블릿 2열, lg:grid-cols-4: 데스크톱 4열 */}
        {/* gap-6 md:gap-8: 그리드 간격 (24px / 32px) */}
        
        {bannersData.map((banner) => (
          <div
            key={banner.id}
            id={`banner-${banner.id}`} // IntersectionObserver가 찾을 ID
            className={`${getGridCols(banner.size)} transition-all duration-300 ${
              activeCards.has(banner.id)
                ? 'transform scale-100 opacity-100' // 활성화: 원래 크기, 완전히 보임
                : 'transform scale-95 opacity-70'   // 비활성화: 5% 축소, 70% 투명도
            }`}
            // transition-all duration-300: 300ms 전환 효과
          >
            <Card
              variant={banner.type} // 'basic' | 'highlighted' | 'image'
              title={banner.title}
              description={banner.description}
              imageSeed={banner.imageSeed} // Picsum Photos 시드
              size={banner.size} // 'small' | 'medium' | 'large'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

