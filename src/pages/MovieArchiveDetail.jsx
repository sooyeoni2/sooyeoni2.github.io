import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './MovieArchiveDetail.module.css'
import DetailContainer from '../components/DetailContainer'

export default function MovieArchiveDetail() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={styles.page}>
      <div className={`${styles.topBar} ${scrolled ? styles.scrolled : ''}`}>
        <button className={styles.back} onClick={() => navigate('/projects')}>
          ← 프로젝트 목록
        </button>
        <span className={styles.label}>
          <img src="/movie_logo.png" alt="Movie Archive" style={{ width: '2rem', height: '2rem', objectFit: 'contain', verticalAlign: 'middle', marginRight: '6px' }} />
          Movie Archive
        </span>
      </div>

      <div className={styles.content}>
        <DetailContainer>

          {/* Hero */}
          <div className={styles.hero}>
            <div className={styles.heroLogo}>
              <img src="/movie_logo.png" alt="Movie Archive 로고" />
            </div>
          </div>
          <div className={styles.heroCard}>
            <h1>Movie Archive</h1>
            <p className={styles.subtitle}>영화 탐색, 커뮤니티, Watchlist, AI 기반 맞춤 추천을 한 곳에서 제공하는 영화 아카이브 서비스</p>
          </div>

          {/* 프로젝트 개요 */}
          <section className={styles.section}>
            <h2>프로젝트 개요</h2>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>프로젝트명</span>
              <span className={styles.overviewValue}>Movie Archive</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>개발 기간</span>
              <span className={styles.overviewValue}>2025.11 ~ 2025.12</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>팀 구성</span>
              <span className={styles.overviewValue}>2명 (FE 1 / BE 1)</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>담당 역할</span>
              <span className={styles.overviewValue}>Django 백엔드 · AI 추천 · 커뮤니티 / 평점 / 취향 DNA 프론트엔드 구현</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>GitHub</span>
              <span className={styles.overviewValue}>
                <a href="https://github.com/sooyeoni2/movie" target="_blank" rel="noopener noreferrer">Movie Archive 보러가기</a>
              </span>
            </div>
          </section>

          {/* 기획 배경 */}
          <section className={styles.section}>
            <h2>기획 배경</h2>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>TMDB</div>
                <div className={styles.statLabel}>100만+ 영화 데이터 API</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>GPT-4o</div>
                <div className={styles.statLabel}>mini 기반 AI 추천</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>YouTube</div>
                <div className={styles.statLabel}>리뷰 영상 검색 연동</div>
              </div>
            </div>

            <div className={styles.highlightBanner}>
              <p>
                영화 정보를 찾으려면 <span className={styles.em}>평점 사이트, 리뷰 영상, 커뮤니티</span> 등<br />
                여러 플랫폼을 오가야 하는 불편함이 있었습니다.<br />
                <span className={styles.em}>탐색 · 리뷰 · 추천을 하나로</span> 통합한 서비스를 목표로 기획했습니다.
              </p>
            </div>

            <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.75', marginTop: '14px' }}>
              사용자가 찜한 영화(Watchlist) 데이터를 기반으로 취향을 분석하고, AI가 맞춤 영화를 추천합니다.
              단순 추천에서 나아가 추천 이유까지 자연어로 생성해 사용자 경험을 개선했습니다.
            </p>
          </section>

          {/* 기술 스택 */}
          <section className={styles.section}>
            <h2>기술 스택</h2>

            <div className={styles.techSectionTitle}>Frontend</div>
            <div className={styles.techTags}>
              <span className={styles.techTag}>Vue 3</span>
              <span className={styles.techTag}>Vite</span>
              <span className={styles.techTag}>Vue Router</span>
              <span className={styles.techTag}>Pinia</span>
              <span className={styles.techTag}>Axios</span>
              <span className={styles.techTag}>CSS</span>
            </div>

            <div className={styles.techSectionTitle}>Backend</div>
            <div className={styles.techTags}>
              <span className={`${styles.techTag} ${styles.backend}`}>Django</span>
              <span className={`${styles.techTag} ${styles.backend}`}>Django REST Framework</span>
              <span className={`${styles.techTag} ${styles.backend}`}>SQLite</span>
            </div>

            <div className={styles.techSectionTitle}>External APIs</div>
            <div className={styles.techTags}>
              <span className={`${styles.techTag} ${styles.api}`}>TMDB API</span>
              <span className={`${styles.techTag} ${styles.api}`}>YouTube Data API</span>
              <span className={`${styles.techTag} ${styles.api}`}>OpenAI GPT-4o-mini</span>
            </div>
          </section>

          {/* 주요 기능 */}
          <section className={styles.section}>
            <h2>주요 기능</h2>
            <div className={styles.featureList}>
              {[
                { title: '영화 탐색', desc: 'TMDB API 기반 영화 검색 및 상세 정보 조회' },
                { title: 'Watchlist', desc: '나중에 볼 영화 저장 / 삭제 관리' },
                { title: '커뮤니티', desc: '영화 리뷰 게시글 작성 · 댓글 · 좋아요/싫어요' },
                { title: '리뷰 영상 검색', desc: 'YouTube API로 영화 리뷰 영상 검색 및 모달 재생' },
                { title: 'AI 영화 추천', desc: 'Watchlist 기반 GPT-4o-mini 맞춤 추천 + 추천 이유 생성' },
                { title: '취향 DNA', desc: '사용자의 영화 취향을 6가지 항목으로 레이더 차트 시각화' },
              ].map(({ title, desc }, i) => (
                <div key={title} className={styles.featureListItem}>
                  <span className={styles.featureNum}>{String(i + 1).padStart(2, '0')}</span>
                  <div className={styles.featureListText}>
                    <span className={styles.featureListTitle}>{title}</span>
                    <span className={styles.featureListDesc}>{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 담당 기능 상세 */}
          <section className={styles.section}>
            <h2>담당 기능 <span className={styles.badge}>4개</span></h2>

            {/* 1. Django API 설계 */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>Django API 설계 및 인증</div>
                  <div className={styles.featureSubtitle}>인증/인가 · DB 모델링 · REST API</div>
                </div>
              </div>

              <div className={styles.featureLabel}>구현 내용</div>
              <ul>
                <li>Django REST Framework 기반 REST API 설계</li>
                <li>회원가입 / 로그인 / 로그아웃 인증 API 구현</li>
                <li>사용자, 영화, 커뮤니티, Watchlist ERD 설계 및 모델 구현</li>
                <li>Serializer를 활용한 데이터 직렬화 / 역직렬화</li>
                <li>CORS 설정으로 Vue 프론트엔드와 API 연동</li>
              </ul>

              <div className={styles.featureLabel}>주요 흐름</div>
              <div className={styles.flowSteps}>
                {[
                  'Vue 프론트엔드 → Django REST API 요청',
                  '인증 미들웨어 → 토큰 검증',
                  'View → Serializer → Model (ORM)',
                  'JSON 응답 반환',
                ].map((text, i, arr) => (
                  <div key={i} className={styles.flowStep}>
                    <div className={styles.flowDotCol}>
                      <div className={styles.flowDot} />
                      {i < arr.length - 1 && <div className={styles.flowLine} />}
                    </div>
                    <div className={styles.flowText}>{text}</div>
                  </div>
                ))}
              </div>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>기술적 포인트</div>
                <ul>
                  <li>ORM을 활용해 복잡한 관계형 쿼리를 직관적으로 처리</li>
                  <li>Serializer에서 중첩 관계 데이터를 효율적으로 직렬화</li>
                  <li>Permission 클래스로 인증 필요 엔드포인트 분리</li>
                </ul>
              </div>
            </div>

            {/* 2. 커뮤니티 CRUD */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>커뮤니티 CRUD</div>
                  <div className={styles.featureSubtitle}>게시글 · 댓글 · 좋아요/싫어요</div>
                </div>
              </div>

              <div className={styles.featureLabel}>구현 내용</div>
              <ul>
                <li>게시글 작성 / 조회 / 수정 / 삭제 API</li>
                <li>댓글 작성 / 수정 / 삭제 + 댓글 수 집계 응답</li>
                <li>좋아요 / 싫어요 토글 API (중복 방지)</li>
                <li>게시글 목록 조회 시 댓글 수 · 좋아요 수 포함 응답</li>
                <li>작성자 본인만 수정 / 삭제 가능한 권한 처리</li>
              </ul>

              <div className={styles.featureLabel}>주요 흐름 (좋아요 토글)</div>
              <div className={styles.flowSteps}>
                {[
                  '좋아요 버튼 클릭 → POST /api/community/{id}/like/',
                  'Like 모델에 해당 유저+게시글 레코드 존재 여부 확인',
                  '존재하면 삭제(토글 OFF), 없으면 생성(토글 ON)',
                  '현재 좋아요/싫어요 수 포함해 응답 반환',
                ].map((text, i, arr) => (
                  <div key={i} className={styles.flowStep}>
                    <div className={styles.flowDotCol}>
                      <div className={styles.flowDot} />
                      {i < arr.length - 1 && <div className={styles.flowLine} />}
                    </div>
                    <div className={styles.flowText}>{text}</div>
                  </div>
                ))}
              </div>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>기술적 챌린지</div>
                <ul>
                  <li>좋아요/싫어요 동시 토글 시 중복 방지를 위한 유니크 제약 조건 설정</li>
                  <li>하나의 API 응답에 게시글 + 댓글 수 + 리액션 수를 효율적으로 포함</li>
                  <li>수정/삭제 권한을 Serializer가 아닌 View 레벨에서 처리</li>
                </ul>
              </div>
            </div>

            {/* 3. AI 추천 */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>AI 영화 추천 시스템</div>
                  <div className={styles.featureSubtitle}>GPT-4o-mini 기반 Watchlist 분석 · 추천 이유 생성</div>
                </div>
              </div>

              <div className={styles.featureLabel}>구현 내용</div>
              <ul>
                <li>사용자 Watchlist 영화 제목 목록을 컨텍스트로 GPT-4o-mini 호출</li>
                <li>추천 영화 5개 + 각 추천 이유를 JSON 형식으로 구조화 출력</li>
                <li>TMDB API로 추천된 영화 메타데이터(포스터, 개요) 보강</li>
                <li>추천 결과 기반 취향 DNA 레이더 차트 (6개 항목) 프론트 전달</li>
              </ul>

              <div className={styles.featureLabel}>AI 추천 아키텍처</div>
              <div className={styles.aiFlow}>
                <span className={styles.step}>[사용자 Watchlist]</span>
                {' → '}
                <span className={styles.step}>[Frontend]</span>{' 영화 제목 리스트 수집\n'}
                {'→ '}
                <span className={styles.step}>[Backend API]</span>{' /api/accounts/ai-recommendations/\n'}
                {'→ '}
                <span className={styles.step}>[GMS API]</span>{' GPT-4o-mini 호출\n'}
                {'→ '}
                <span className={styles.step}>[AI 분석]</span>{' 추천 영화 + 이유 JSON 생성\n'}
                {'→ '}
                <span className={styles.step}>[TMDB API]</span>{' 영화 메타데이터 보강\n'}
                {'→ '}
                <span className={styles.step}>[Frontend]</span>{' 추천 결과 + 레이더 차트 표시'}
              </div>

              <div className={styles.featureLabel}>프롬프트 설계 포인트</div>
              <ul>
                <li>역할 지정: "Answer in Korean" → 한국어 응답 유도</li>
                <li>구조화된 출력: JSON 형식 강제로 파싱 안정성 확보</li>
                <li>추천 수 제한: 5개로 제한해 정확도와 응답 속도 균형 유지</li>
                <li>명확한 입력: Watchlist 영화 제목을 컨텍스트로 제공</li>
              </ul>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>기술적 챌린지</div>
                <ul>
                  <li>JSON 형식을 강제하지 않으면 파싱 실패율이 높아 프롬프트를 반복 튜닝</li>
                  <li>TMDB에 없는 AI 추천 영화의 경우 메타데이터 미수신 처리</li>
                  <li>GMS API 응답 지연(3~5초) 동안 프론트에 로딩 상태 전달</li>
                </ul>
              </div>
            </div>

            {/* 4. 취향 DNA */}
            <div className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <div>
                  <div className={styles.featureTitle}>취향 DNA 레이더 차트</div>
                  <div className={styles.featureSubtitle}>AI 분석 결과 기반 6축 SVG 레이더 차트 시각화</div>
                </div>
              </div>

              <div className={styles.featureLabel}>구현 내용</div>
              <ul>
                <li>AI 응답(장르 · 테마 · 분위기 · 감독 스타일)을 파싱해 6개 축 점수 계산</li>
                <li>6축 레이더 차트를 Vue에서 순수 SVG로 직접 구현 (외부 라이브러리 미사용)</li>
                <li>배경 격자(pentagon), 축 선, 데이터 영역(polygon), 데이터 포인트(circle) 직접 렌더링</li>
                <li>파란~보라 그라디언트 채움 영역으로 시각적 완성도 향상</li>
                <li>화면 너비별 차트 크기 동적 조정 (320px ~ 500px 반응형)</li>
                <li>점수 정규화 및 최솟값 보정으로 차트가 너무 작게 표시되지 않도록 처리</li>
              </ul>

              <div className={styles.featureLabel}>6축 항목</div>
              <ul>
                <li><strong>감정 몰입</strong> — 드라마 · 가족 · 감동 장르/테마 가중치</li>
                <li><strong>철학적 호기심</strong> — 스릴러 · 미스터리 · 사회 테마 가중치</li>
                <li><strong>긴장/자극</strong> — 액션 · 공포 · 서스펜스 가중치</li>
                <li><strong>유머/재미</strong> — 코미디 · 애니메이션 가중치</li>
                <li><strong>로맨스/감성</strong> — 로맨스 · 멜로 테마 가중치</li>
                <li><strong>창의적 상상</strong> — SF · 판타지 · 모험 가중치</li>
              </ul>

              <div className={styles.featureLabel}>점수 계산 흐름</div>
              <div className={styles.flowSteps}>
                {[
                  'AI 응답에서 genres · themes · mood · director_style 추출',
                  '장르(+0.35) → 테마(+0.25) → 분위기(+0.2) → 감독 스타일(+0.15) 순으로 각 축 점수 누적',
                  '전체 축 점수를 최대값 기준으로 정규화 (0~1)',
                  '0보다 크고 0.2 미만인 값은 0.2로 보정해 차트 표시 보장',
                  'radarAxes 배열 업데이트 → SVG polygon 재렌더링',
                ].map((text, i, arr) => (
                  <div key={i} className={styles.flowStep}>
                    <div className={styles.flowDotCol}>
                      <div className={styles.flowDot} />
                      {i < arr.length - 1 && <div className={styles.flowLine} />}
                    </div>
                    <div className={styles.flowText}>{text}</div>
                  </div>
                ))}
              </div>

              <div className={styles.challenge}>
                <div className={styles.challengeTitle}>기술적 챌린지</div>
                <ul>
                  <li>SVG 좌표계에서 6각형 꼭짓점 각도 계산 (-π/2 오프셋으로 정상 방향 정렬)</li>
                  <li>AI 응답의 자연어를 키워드 매칭으로 수치화하는 점수 산정 로직 설계</li>
                  <li>정규화 후 극단적으로 작은 값이 시각적으로 사라지는 문제 → 최솟값 보정으로 해결</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 트러블슈팅 */}
          <section className={styles.section}>
            <h2>트러블슈팅</h2>

            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>AI 추천</span>
                <span className={styles.troubleTitle}>프롬프트 미설계로 인한 JSON 파싱 실패</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                <span className={styles.troubleText}>AI 응답이 JSON 형식을 따르지 않아 프론트에서 파싱 오류 빈번 발생</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                <span className={styles.troubleText}>프롬프트에 출력 형식을 명시하지 않아 AI가 자연어 문장, 마크다운 코드블록 등 다양한 형태로 응답</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                <span className={styles.troubleText}>프롬프트에 "반드시 다음 JSON 형식으로만 답변하세요"와 함께 스키마를 명시, 백엔드에서 JSON 파싱 실패 시 재시도 로직 추가</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                <span className={styles.troubleText}>생성형 AI 활용 시 모델 자체보다 어떤 정보를 어떻게 전달하느냐가 결과 품질에 큰 영향을 미침</span>
              </div>
            </div>

            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>협업</span>
                <span className={styles.troubleTitle}>프론트-백엔드 데이터 구조 불일치</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                <span className={styles.troubleText}>개발 중반에 프론트엔드가 요구하는 응답 필드명과 백엔드 Serializer 필드명이 달라 화면이 깨지는 현상 반복</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                <span className={styles.troubleText}>초기에 API 명세를 충분히 합의하지 않고 각자 개발을 시작해 응답 구조가 서로 달라짐</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                <span className={styles.troubleText}>중간 점검에서 응답 JSON 구조를 문서화하고 합의 후, Serializer 필드명을 프론트엔드 요구사항에 맞게 수정</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                <span className={styles.troubleText}>기능 구현 전 API 응답 구조를 먼저 합의하는 것이 전체 개발 속도를 높이는 핵심</span>
              </div>
            </div>

            <div className={styles.troubleCard}>
              <div className={styles.troubleHeader}>
                <span className={styles.troubleTag}>백엔드</span>
                <span className={styles.troubleTitle}>기능 수정 시 연관 API 오류 발생</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.problem}`}>문제</span>
                <span className={styles.troubleText}>커뮤니티 API 수정 시 댓글 수 집계, 좋아요 수 응답 등 연관 기능에서 예상치 못한 오류 발생</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.cause}`}>원인</span>
                <span className={styles.troubleText}>화면에 보이는 부분만 수정하다 보니 직접적으로 드러나지 않는 연관 API 흐름을 놓침</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.solve}`}>해결</span>
                <span className={styles.troubleText}>수정 전 해당 View와 연결된 Serializer, Model, 연관 엔드포인트를 전체적으로 확인하는 습관으로 개선</span>
              </div>
              <div className={styles.troubleRow}>
                <span className={`${styles.troubleLabel} ${styles.learn}`}>배운 점</span>
                <span className={styles.troubleText}>백엔드 로직은 하나의 수정이 여러 API와 데이터 흐름에 영향을 줄 수 있어 전체 구조를 함께 고려해야 함</span>
              </div>
            </div>
          </section>

          {/* 마치며 */}
          <section className={styles.section}>
            <h2>마치며</h2>

            <div className={styles.resultCard}>
              <h4>프롬프트 설계가 곧 기능 품질</h4>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '8px' }}>
                처음에는 API만 호출하면 좋은 결과가 나올 거라 생각했는데, 프롬프트를 어떻게 설계하느냐에 따라
                응답 품질과 파싱 안정성이 크게 달라졌습니다. AI 기능은 모델보다 프롬프트 설계가 핵심이라는 것을 배웠습니다.
              </p>
            </div>

            <div className={styles.resultCard}>
              <h4>API 명세는 코드보다 먼저</h4>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '8px' }}>
                기능 구현에 바로 뛰어들다 보니 중반에 프론트와 백엔드의 데이터 구조가 어긋나 수정에 많은 시간을 썼습니다.
                다음 프로젝트에서는 API 응답 구조를 먼저 합의하고 시작하는 것이 전체 속도를 높인다는 것을 실감했습니다.
              </p>
            </div>

            <div className={styles.resultCard}>
              <h4>수정 전에 전체 흐름을 먼저 확인</h4>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '8px' }}>
                화면에 보이는 부분만 고치다가 연관 API에서 오류가 터지는 경험을 여러 번 했습니다.
                백엔드 로직은 하나의 변경이 여러 흐름에 영향을 주기 때문에, 수정 전 관련 모델과 API를 함께 검토하는 습관이 중요하다고 느꼈습니다.
              </p>
            </div>
          </section>

        </DetailContainer>
      </div>
    </div>
  )
}