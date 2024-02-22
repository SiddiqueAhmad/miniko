import os
from datetime import datetime

from cosmos import DbtDag, ProjectConfig, ProfileConfig, ExecutionConfig

profile_config = ProfileConfig(
    profile_name="trino-local",
    target_name="dev",
    profiles_yml_filepath="/opt/airflow/dags/dbt_ops_repo/profiles.yml",
)

my_cosmos_dag = DbtDag(
    project_config=ProjectConfig(
        "/opt/airflow/dags/dbt_ops_repo",
    ),
    profile_config=profile_config,
    # execution_config=ExecutionConfig(
    #     dbt_executable_path=f"{os.environ['AIRFLOW_HOME']}/dbt_venv/bin/dbt",
    # ),
    # normal dag parameters
    schedule_interval="@daily",
    start_date=datetime(2023, 3, 1),
    catchup=False,
    dag_id="my_cosmos_dag2",
    default_args={"retries": 2},
)
