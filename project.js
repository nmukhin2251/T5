define([], function( ) { return  JSON.stringify(
{
	"localVersion": 1515375255596,
	"serverVersion": 1515375255596,
	"components": [
		{
			"Title": "Task",
			"ContentTypeId": "0x01080048257DEE240A494CAD10FDAFDE09FABB",
			"Require": {
				"name": "task",
				"proto": false,
				"path": "task"
			},
			"Markup": {
				"tag": "component-task"
			},
			"Params": {}
		}
	],
	"columns": {
		"Title": "<Field ID=\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\" Type=\"Text\" Name=\"Title\" DisplayName=\"Task Name\" Required=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Title\" FromBaseType=\"TRUE\" Sealed=\"TRUE\" ColName=\"nvarchar1\" />",
		"Attachments": "<Field ID=\"{67df98f4-9dec-48ff-a553-29bece9c5bf4}\" ColName=\"tp_HasAttachment\" RowOrdinal=\"0\" Type=\"Attachments\" Name=\"Attachments\" DisplayName=\"Attachments\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Attachments\" FromBaseType=\"TRUE\" />",
		"PercentComplete": "<Field Type=\"Number\" Name=\"PercentComplete\" ID=\"{d2311440-1ed6-46ea-b46d-daa643dc3886}\" Percentage=\"TRUE\" Min=\"0\" Max=\"1\" DisplayName=\"% Complete\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"PercentComplete\" ColName=\"float1\"><Default>0</Default></Field>"
	}
}
);});