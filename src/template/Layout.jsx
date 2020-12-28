import React from 'react'
import { Container, Skeleton } from '@chakra-ui/core'

import Header from './Header'
import Footer from './Footer'

function Layout() {
	return (
		<>
			<Header />
			<Container centerContent minHeight="800px">
				<Skeleton mt="4" spacing="10">
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						sed sem ex. In eget arcu id ipsum porta tincidunt semper ac libero.
						Orci varius natoque penatibus et magnis dis parturient montes,
						nascetur ridiculus mus. Sed nec pharetra nulla. Aliquam purus eros,
						posuere id semper in, tristique in mi. Aliquam venenatis sapien
						volutpat urna dignissim aliquam ullamcorper ut mauris. Nullam
						finibus facilisis nisi, vitae tempor quam. Quisque at laoreet risus.
						Maecenas scelerisque vehicula dapibus. Etiam eleifend molestie est a
						imperdiet.
					</div>
				</Skeleton>
				<Skeleton mt="4" spacing="10">
					<div>
						Curabitur a ipsum sit amet libero condimentum congue. Cras vel
						faucibus massa. Curabitur pretium est eu velit laoreet vehicula.
						Nulla tincidunt erat a facilisis interdum. Nullam gravida, lorem et
						commodo dapibus, dui mauris aliquam velit, a consequat quam lorem
						vitae turpis. Proin eleifend sapien eu turpis hendrerit feugiat.
					</div>
				</Skeleton>
			</Container>
			<Footer />
		</>
	)
}

export default Layout
