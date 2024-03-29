/**
 * RootLayout: 프로젝트 전체에서 공유하는 최상위 레이아웃
 * 프로젝트 공통 Provider, dcss, script 등은 이곳에서 작성한다.
 */
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
