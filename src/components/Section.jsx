/**
 * Section.jsx - 섹션 래퍼 컴포넌트
 * 
 * 뷰포트에 들어올 때 fade-in + slide-up 애니메이션을 적용하는 재사용 가능한 섹션 컴포넌트입니다.
 * 모든 페이지 섹션에 일관된 스크롤 애니메이션을 제공합니다.
 * 
 * @param {string} id - 섹션 ID (앵커 링크용)
 * @param {ReactNode} children - 섹션 내용
 * @param {string} className - 추가 CSS 클래스
 */

import { useInView } from '../hooks/useInView'

export default function Section({ id, children, className = '' }) {
  // useInView 훅으로 뷰포트 감지
  // threshold: 0.1 = 요소의 10%가 보이면 감지
  const [ref, isInView, hasBeenInView] = useInView({ threshold: 0.1 })

  return (
    <section
      id={id} // 앵커 링크를 위한 ID
      ref={ref} // IntersectionObserver가 감시할 요소에 ref 연결
      className={`transition-all duration-500 ${
        hasBeenInView
          ? 'opacity-100 translate-y-0' // 뷰포트에 보였을 때: 완전히 보이고 원래 위치
          : 'opacity-0 translate-y-8'   // 아직 안 보일 때: 투명하고 아래로 32px 이동
      } ${className}`}
      // transition-all duration-500: 모든 속성에 500ms 전환 효과
      // translate-y-8: 아래로 32px (8 * 4px) 이동
    >
      {children}
    </section>
  )
}