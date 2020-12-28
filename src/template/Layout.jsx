import React from 'react'
import { Container } from '@chakra-ui/core'

import Header from './Header'
import Footer from './Footer'

function Layout() {
	return (
		<>
			<Header />
			<Container centerContent minHeight="800px">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed
				sem ex. In eget arcu id ipsum porta tincidunt semper ac libero. Orci
				varius natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Sed nec pharetra nulla. Aliquam purus eros, posuere id
				semper in, tristique in mi. Aliquam venenatis sapien volutpat urna
				dignissim aliquam ullamcorper ut mauris. Nullam finibus facilisis nisi,
				vitae tempor quam. Quisque at laoreet risus. Maecenas scelerisque
				vehicula dapibus. Etiam eleifend molestie est a imperdiet. Curabitur a
				ipsum sit amet libero condimentum congue. Cras vel faucibus massa.
				Curabitur pretium est eu velit laoreet vehicula. Nulla tincidunt erat a
				facilisis interdum. Nullam gravida, lorem et commodo dapibus, dui mauris
				aliquam velit, a consequat quam lorem vitae turpis. Proin eleifend
				sapien eu turpis hendrerit feugiat. Quisque tellus mi, dapibus faucibus
				malesuada a, dapibus a risus. Nunc eget libero blandit ipsum semper
				eleifend eget ut neque. Etiam pharetra id neque ac facilisis. Nullam eu
				mauris non erat ornare malesuada. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Aliquam ut erat quis nisi malesuada
				pharetra. Morbi a eros urna. Donec vitae rutrum velit, vitae laoreet
				augue. Aliquam iaculis, enim quis commodo pulvinar, metus odio gravida
				augue, eget porttitor elit erat et dui. Fusce ligula arcu, mattis at
				purus at, sodales vestibulum neque. Nullam tristique turpis eu diam
				cursus, id imperdiet metus tempor. Duis viverra augue sit amet rhoncus
				finibus. Cras finibus magna id finibus ultrices. Suspendisse potenti.
				Vestibulum in mauris ante. Mauris pharetra diam nisl. Nunc at vulputate
				nunc, vel suscipit dolor. Vestibulum a sagittis dui. Praesent
				scelerisque diam condimentum tortor fermentum egestas. Praesent et enim
				sed erat malesuada rhoncus ac in magna. Aenean leo nunc, semper sed
				lorem eu, aliquet efficitur nisl. Nulla maximus facilisis massa in
				auctor. Proin sodales nulla euismod orci fermentum, sit amet condimentum
				nisi rutrum. Sed tincidunt mi lacus, a laoreet augue dignissim id.
				Vestibulum sed enim non sem ultrices sagittis ut vitae mauris. In hac
				habitasse platea dictumst. Maecenas mattis ligula lacus, convallis
				pulvinar lorem sollicitudin sed. Quisque hendrerit mollis mi eu feugiat.
				Donec tincidunt rutrum porttitor. Etiam leo arcu, hendrerit non
				tristique sit amet, pretium a ligula. Phasellus venenatis sollicitudin
				urna. In vehicula metus vitae lacus auctor lacinia. Nam sit amet tortor
				sodales, rhoncus enim ut, gravida augue.
			</Container>
			<Footer />
		</>
	)
}

export default Layout
