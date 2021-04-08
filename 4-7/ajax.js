
function ajax(url,funSucc,funFaild){
 
	//1、创建Ajax对象
	var oAjax=null;
 
	if(window.XMLHttpRequest){
		oAjax=new XMLHttpRequest();
	}else{
		oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	//alert(oAjax);
 
	//alert(oAjax.readyState);
	//2、连接服务器
	oAjax.open('GET',url,true);//open(方式，url读哪个文件，是否异步)
	//alert(oAjax.readyState);
	//3、发送请求
	oAjax.send();
 
	//4、接收返回值
	oAjax.onreadystatechange=function(){//onreadystatechange客户端与服务器通信（提供与文档或元素的加载状态有关的信息）的信息
		//oAjax.readyState等于0；表示对象存在但尚未初始化。（还没有调用open()方法）
		//oAjax.readyState等于1；表示对象正在加载数据。（已调用send()方法，正在发送请求）
		//oAjax.readyState等于2；表示对象加载数据完成。（send()方法完成，已收到全部响应内容）
		//oAjax.readyState等于3；可以操作对象了，但还没有完全加载（正在解析响应内容）
		//oAjax.readyState等于4；表示对象已经加载完毕。（响应内容解析完成，可以在客户端调用了）
		//alert(oAjax.readyState);
		if(oAjax.readyState==4){//oAjax.readyState等于4;表示完成，但不表示请求成功
			//alert(oAjax.status);
			//oAjax.status等于200，表示请求成功；
			//oAjax.status等于400多，表示客户端错误；
			//oAjax.status等于500多，表示服务器错误；
			if(oAjax.status==200){
				//alert("成功："+oAjax.responseText);//responseText表示异步加载的数据
				funSucc(oAjax.responseText);
			}else{
				//alert("失败");
				if(funFaild){
					funFaild();
				}
			}
		} 
	} 
}