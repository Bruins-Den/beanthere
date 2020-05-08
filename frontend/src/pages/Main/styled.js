import styled from 'styled-components';

export const GridContainer = styled.div`
		display:grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas:
		 
			"postGrid postGrid threadGrid"
			"postGrid postGrid threadGrid"
			"postGrid postGrid threadGrid2"
			"postGrid postGrid threadGrid2";

`
export const PostGrid = styled.div`
		grid-area:postGrid;
`
export const ThreadGrid = styled.div`
		grid-area:threadGrid;
		border: 2px solid #383287;
		postion: relative;
		padding: 15px;
		margin: 10px;
		text-align:left;
		font-family:Karla;
		font-size:14px;
`
export const ThreadGrid2 = styled.div`
		grid-area:threadGrid2;
		border: 2px solid #383287;
		postion: relative;
		padding: 15px;
		margin: 10px;
		text-align:left;
		font-family:Karla;
		font-size:14px;
`
export const ThreadTitle = styled.h1`
		font-family:Crimson Pro;
		font-size:18px;
		font-weight:bold;
		color:#383287;
`

export const ButtonStyles = styled.button`
  
		text-align: right;
		float:right;
		cursor: pointer;
		border: 2px solid #383287;
		text-decoration: none;
		padding: 8px 20px;
		background-color: #f3e3db;
		font-family:Karla;
		font-size:14px;
		&:hover{
			border-color:#d85235;
			color:#d85235;
		}
`