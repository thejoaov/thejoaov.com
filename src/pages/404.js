import React from 'react'
import { Layout, SEO } from 'Common'

export default () => (
	<Layout>
		<SEO title="404: Não encontrado" location="/404" />
		<h1>NÃO ENCONTRADO</h1>
		<p>Ué? cadê a página que tava aqui?</p>
		<p>Acho que essa página não existe :/</p>
		<p>
			Melhor voltar pra <a href="/">página inicial</a>
		</p>
	</Layout>
)
