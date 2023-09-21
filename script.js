 const MyForm = document.querySelector("#MyForm")
	const volume = document.querySelector("#volume")
function volume_sphere(e) {
	e.preventDefault()
  const radius = document.querySelector("#radius").value

		const num = Number(radius)
		const ans = (4/3) * Math.PI * (num * num * num)
		    volume.value =`${ans}`
} 

MyForm.addEventListener('submit', volume_sphere);
