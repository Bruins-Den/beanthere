import styled from 'styled-components';

export const GridContainer = styled.div`
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
`
export const PostGrid = styled.div`
		grid-area: 1 / 3 / 6 / 6; 		
`
export const MenuSection = styled.div`
		grid-area: 1 / 1 / 2 / 3; 	
`
export const TopGrid = styled.div`
 		grid-area: 2 / 1 / 4 / 3; 
		postion: relative;
		padding: 15px;
		margin: 10px;
		text-align:left;
		font-family:Karla;
		font-size:14px;
`
export const BottomGrid = styled.div`
 		grid-area: 4 / 1 / 6 / 3; 
		postion: relative;
		padding: 15px;
		margin: 10px;
		text-align:left;
		font-family:Karla;
		font-size:14px;

		.searchBar{
			top: 50%;
  			left: 50%;
  			transform: translate(1.4%, 20%);
		}
`
export const ThreadGrid2 = styled.div`
		border-top: 2px solid #72b0bd;
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
		color:#72b0bd;
`

export const ButtonStyles = styled.button`
		display:flex;
		text-align: right;
		float:top;
		cursor: pointer;
		border: 2px solid #72b0bd;
		text-decoration: none;
		padding: 8px 20px;
		background-color: #fff;
		font-family:Karla;
		font-size:14px;
		&:hover{
			border-color:#d85235;
			color:#d85235;
		}
`
export const CreatePostStyle = styled.div`
		#createBar{
			top: 50%;
  			left: 50%;
  			transform: translate(1.4%, 20%);
			input{
				width:320px;
			}
		}
`
export const MainSection = styled.div`
		.logo{
			font-size:35px;
			font-weight: bold;
			color:#72b0bd;
			margin:8px;
			font-family: Crimson Pro;
			/*font-family: Lora;*/
			/*font-family: Karla;*/
			/*font-family: Playfair Display;*/
			/*font-family: Montserrat;*/
			}
		.logo a {
			text-decoration: none;
			color:#72b0bd;
		}
		p{
			width: 320px;
			margin: 10px;
			text-align:left;
			font-family:Karla;
			font-weight:100;
			font-size:14px;
		}
`